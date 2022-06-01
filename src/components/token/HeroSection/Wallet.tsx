/* eslint-disable */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  useAccount,
  useConnect,
  useDisconnect,
  useNetwork,
  useProvider,
  useSendTransaction,
  useToken,
} from 'wagmi';

import { useEffect, useState } from 'react';
import { StackOSButton, StackOSDropdown, StackOSIcon, StackOSInput } from '@/components';

import { BiCog, BiInfoCircle, BiLinkExternal } from 'react-icons/bi';
import { BsArrowDownCircle } from 'react-icons/bs';
import { BigNumber, ethers } from 'ethers';
import { IoMdClose } from 'react-icons/io';

interface Token {
  id: number;
  title: string;
  icon: string;
  subtitle?: string;
}

interface Tokens {
  Ethereum: Token[];
  Polygon: Token[];
  BSC: Token[];
}

// TODO fromTokenAddress
const STACK_ADDRESS = '0x6855f7bb6287F94ddcC8915E37e73a3c9fEe5CF3';
const ETHEREUM = 1;
const BSC = 56;
const POLYGON = 137;

const Wallet = () => {
  const { data: account } = useAccount();
  const { connect, connectors, isConnecting, pendingConnector } = useConnect();
  const { disconnect } = useDisconnect();
  const { activeChain, chains, switchNetwork } = useNetwork();
  const {
    data: transactionResponse,
    isIdle,
    isError,
    isLoading,
    isSuccess,
    sendTransaction,
  } = useSendTransaction();
  const provider = useProvider();
  // const { data: token } = useToken({
  //   address: '0x6855f7bb6287F94ddcC8915E37e73a3c9fEe5CF3',
  // });
  // console.log(token);

  const metamask = connectors[0];

  const ethereumChain = chains.find((chain) => chain.id === ETHEREUM);
  const binanceChain = chains.find((chain) => chain.id === BSC);
  const polygonChain = chains.find((chain) => chain.id === POLYGON);

  const networkOptions = [
    { title: 'Ethereum', subtitle: 'Uniswap (v2)', icon: 'uniswap', ...ethereumChain },
    { title: 'Polygon', subtitle: 'Dfyn', icon: 'dfyn', ...polygonChain },
    { title: 'BSC', subtitle: 'PancakeSwap (v2)', icon: 'pancakeswap', ...binanceChain },
  ];

  const [input, setInput] = useState<number>();
  const [settingsOpen, setSettingsOpen] = useState<boolean>(false);

  const [tokenOptions, setTokenOptions] = useState<Token[]>([
    { id: 1, title: 'ETH', icon: 'eth' },
    { id: 2, title: 'USDC', icon: 'usdc' },
    { id: 3, title: 'USDT', icon: 'usdt' },
    { id: 43, title: 'WETH', icon: 'weth' },
  ]);
  const [networkSelected, setNetworkSelected] = useState<Token>({
    id: 56,
    title: 'BSC',
    icon: 'pancakeswap',
  });
  const [tokenSelected, setTokenSelected] = useState<Token>({ id: 1, title: 'ETH', icon: 'eth' });

  useEffect(() => {
    const tokens: Tokens = {
      Ethereum: [
        { id: 1, title: 'ETH', icon: 'eth' },
        { id: 2, title: 'USDC', icon: 'usdc' },
        { id: 3, title: 'USDT', icon: 'usdt' },
        { id: 43, title: 'WETH', icon: 'weth' },
      ],
      Polygon: [
        { id: 1, title: 'MATIC', icon: 'matic' },
        { id: 2, title: 'USDC', icon: 'usdc' },
        { id: 3, title: 'USDT', icon: 'usdt' },
      ],
      BSC: [
        { id: 1, title: 'BNB', icon: 'bnb' },
        { id: 2, title: 'BUSD', icon: 'busd' },
        { id: 3, title: 'USDT', icon: 'usdt' },
        { id: 43, title: 'WBNB', icon: 'wbnb' },
      ],
    };

    setTokenOptions(tokens[networkSelected.title as keyof Tokens]);
  }, [networkSelected]);

  useEffect(() => {
    setupNetwork();
  }, [activeChain]);

  const walletAddress = account?.address;
  const broadcastApiUrl = 'https://tx-gateway.1inch.io/v1.1/' + networkSelected.id + '/broadcast';
  const apiBaseUrl = 'https://api.1inch.io/v4.0/' + networkSelected.id;

  function onChangeNetwork(value: number) {
    if (!activeChain) {
      connect(metamask);
    }

    switchNetwork?.(value);
  }

  function onChangeToken(value: number) {
    setTokenSelected(tokenOptions.find((option) => option.id === value) as Token);
  }

  function setupNetwork() {
    if (activeChain && activeChain?.id !== networkSelected?.id) {
      setNetworkSelected(networkOptions.find((option) => option.id === activeChain?.id) as Token);

      if (!account) {
        connect(metamask);
      }
    }
  }

  function apiRequestUrl(methodName, queryParams) {
    return apiBaseUrl + methodName + '?' + new URLSearchParams(queryParams).toString();
  }

  function checkAllowance(tokenAddress, walletAddress) {
    return fetch(apiRequestUrl('/approve/allowance', { tokenAddress, walletAddress }))
      .then((res) => res.json())
      .then((res) => res.allowance);
  }

  async function broadCastRawTransaction(rawTransaction) {
    return fetch(broadcastApiUrl, {
      method: 'post',
      body: JSON.stringify({ rawTransaction }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((res) => {
        return res.transactionHash;
      });
  }

  async function signAndSendTransaction(transaction) {
    // const {rawTransaction} = await web3.eth.accounts.signTransaction(transaction, privateKey);
    console.log(transaction);

    const rawTransaction = await sendTransaction({
      request: {
        to: transaction.to,
        from: transaction.from,
        data: transaction.data,
        gasPrice: transaction.gasPrice,
        value: BigNumber.from(transaction.value),
      },
    });

    console.log(rawTransaction);
    console.log(transactionResponse); // fazer um watch dessa variavel pra chamar o broadcast

    return await broadCastRawTransaction(rawTransaction);
  }

  async function buildTxForApproveTradeWithRouter(tokenAddress, amount) {
    const url = apiRequestUrl(
      '/approve/transaction',
      amount ? { tokenAddress, amount } : { tokenAddress }
    );

    const transaction = await fetch(url)
      .then((res) => res.json())
      .catch((e) => {
        console.log(e);
      });

    console.log(transaction);

    const gasLimit = await provider.estimateGas({
      ...transaction,
      from: walletAddress,
    });
    console.log(gasLimit);

    // enviando o 'data' do transaction aqui faz o metamask ficar em loading infinito
    return {
      gasLimit,
      to: transaction.to,
      gasPrice: transaction.gasPrice,
      value: BigNumber.from(transaction.value),
    };
  }

  async function buildTxForSwap(swapParams) {
    const url = apiRequestUrl('/swap', swapParams);

    return fetch(url)
      .then((res) => res.json())
      .then((res) => res.tx);
  }

  async function onClickSwap() {
    const swapParams = {
      fromTokenAddress: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', // BNB
      toTokenAddress: STACK_ADDRESS,
      amount: 0.0001 * 10 ** 18,
      fromAddress: walletAddress,
      slippage: 1,
      disableEstimate: true, // default false, error 400 'cannot estimate. Don't forget about miner fee. Try to leave the buffer of BNB for gas' on default
      allowPartialFill: false,
    };

    console.log(swapParams);
    console.log(networkSelected);
    console.log(account);
    console.log(activeChain);
    const allowance = await checkAllowance(swapParams.fromTokenAddress, walletAddress);

    console.log('Allowance: ', allowance);

    if (allowance === 0) {
      // First, let's build the body of the transaction
      const transactionForSign = await buildTxForApproveTradeWithRouter(
        swapParams.fromTokenAddress
      );
      console.log('Transaction for approve: ', transactionForSign);

      // Send a transaction and get its hash
      const approveTxHash = await signAndSendTransaction(transactionForSign);

      console.log('Approve tx hash: ', approveTxHash);
    }

    // First, let's build the body of the transaction
    const swapTransaction = await buildTxForSwap(swapParams);
    console.log('Transaction for swap: ', swapTransaction);

    // Send a transaction and get its hash
    const swapTxHash = await signAndSendTransaction(swapTransaction);
    console.log('Swap transaction hash: ', swapTxHash);
  }

  return (
    <>
      <StackOSDropdown
        className="w-full h-12 px-2 bg-main-green flex flex-row justify-center items-center rounded"
        header="Select a network"
        selected={networkSelected.id}
        dropdownOptions={networkOptions}
        onChangeSelection={(value) => onChangeNetwork(value)}
      >
        <StackOSIcon className="h-5 w-5" iconName={networkSelected.icon} />
        <span className="text-[#111827] font-medium text-base ml-2 mr-3">
          {networkSelected.title}
        </span>
      </StackOSDropdown>
      <div className="mt-20 px-4 py-6 bg-[#1F2937] rounded-md">
        {settingsOpen ? (
          <>
            <div className="flex flex-row justify-between mb-7">
              <span className="text-[#F9FAFB]">Settings</span>
              <IoMdClose
                className="hover:cursor-pointer"
                color="#CFCFCF"
                size={20}
                onClick={() => setSettingsOpen(false)}
              />
            </div>
            <div>TODO</div>
          </>
        ) : (
          <>
            <div className="flex flex-row justify-between mb-7">
              <a
                href="https://app.1inch.io/"
                target="_blank"
                rel="noreferrer"
                className="flex flex-row items-end mb-2 text-main-green hover:cursor-pointer"
              >
                <BiLinkExternal className="duration-500 text-xl" color="#AAFF00" />
                <p className="mx-2 font-normal text-sm duration-500">By 1inch</p>
              </a>
              <BiCog
                className="hover:cursor-pointer"
                color="#CFCFCF"
                size={20}
                onClick={() => setSettingsOpen(true)}
              />
            </div>
            <StackOSInput
              dropdownOptions={tokenOptions}
              selected={tokenSelected.id}
              onChangeSelection={(value) => onChangeToken(value)}
              value={input}
              onChangeInput={(value) => setInput(value)}
            />
            <div className="relative z-10 h-1 flex flex-row justify-center items-center">
              <BsArrowDownCircle color="#AAFF00" size={26} />
            </div>
            <StackOSInput />
            <div className="flex flex-row items-end my-6 text-white">
              <BiInfoCircle className="duration-500 text-xl" color="#CFCFCF" />
              <p className="mx-2 font-normal text-sm duration-500">Enter an amount</p>
            </div>
            <div className="flex flex-row justify-center items-center w-full">
              {account?.address ? (
                <div className="w-full child:w-full" onClick={() => onClickSwap()}>
                  <StackOSButton>Buy STACK</StackOSButton>
                </div>
              ) : (
                <button
                  type="button"
                  className="w-full bg-transparent border border-main-green text-main-green rounded-md px-9 py-3"
                  onClick={() => connect(metamask)}
                >
                  {isConnecting && metamask?.id === pendingConnector?.id
                    ? 'Connecting Wallet...'
                    : 'Connect Wallet'}
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Wallet;
