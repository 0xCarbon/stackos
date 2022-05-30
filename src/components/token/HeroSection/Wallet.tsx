/* eslint-disable */
/* eslint-disable react-hooks/exhaustive-deps */
import { useAccount, useConnect, useDisconnect, useNetwork } from 'wagmi';

// import Image from 'next/image';
import { useEffect, useState } from 'react';
import { HiSwitchVertical } from 'react-icons/hi';
import { StackOSButton, StackOSDropdown, StackOSIcon, StackOSInput } from '@/components';

import web3 from 'web3';

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
const STACK_ADDRESS = '0x980111ae1B84E50222C8843e3A7a038F36Fecd2b';
const ETHEREUM = 1;
const BSC = 56;
const POLYGON = 137;

const web3RpcUrl = 'https://polygon-rpc.com/';
const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY;

const Wallet = () => {
  const { data: account } = useAccount();
  const { connect, connectors, isConnecting, pendingConnector } = useConnect();
  const { disconnect } = useDisconnect();
  const { activeChain, chains, switchNetwork } = useNetwork();

  const metamask = connectors[0];

  const ethereumChain = chains.find((chain) => chain.id === ETHEREUM);
  const binanceChain = chains.find((chain) => chain.id === BSC);
  const polygonChain = chains.find((chain) => chain.id === POLYGON);

  const networkOptions = [
    { title: 'Ethereum', subtitle: 'Uniswap (v2)', icon: 'uniswap', ...ethereumChain },
    { title: 'Polygon', subtitle: 'Dfyn', icon: 'dfyn', ...polygonChain },
    { title: 'BSC', subtitle: 'PancakeSwap (v2)', icon: 'pancakeswap', ...binanceChain },
  ];

  const [input, setInput] = useState<number>(1);

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
  const Web3 = new web3(web3RpcUrl);

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
    const { rawTransaction } = await Web3.eth.accounts.signTransaction(transaction, privateKey);

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

    const gasLimit = await Web3.eth.estimateGas({
      ...transaction,
      from: walletAddress,
    });

    return {
      ...transaction,
      gas: gasLimit,
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
      fromTokenAddress: '0xb33eaad8d922b1083446dc23f610c2567fb5180f', // MATIC
      toTokenAddress: STACK_ADDRESS,
      amount: input * 10 ** 18,
      fromAddress: walletAddress,
      slippage: 1,
      disableEstimate: false,
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
      <div className="mt-20 p-4 bg-[#1F2937] rounded-md">
        <p className="text-[#F9FAFB] font-semibold text-xl mb-8">Buy STACK</p>
        <StackOSInput
          dropdownOptions={tokenOptions}
          selected={tokenSelected.id}
          onChangeSelection={(value) => onChangeToken(value)}
          value={input}
          onChangeInput={(value) => setInput(value)}
        />
        <div className="relative z-10 h-1 flex flex-row justify-center items-center">
          <HiSwitchVertical color="#84CC16" size={20} />
        </div>
        <StackOSInput />
        <div className="flex flex-row justify-center items-center mt-6 w-full">
          {account?.address ? (
            <div className="w-full child:w-full" onClick={() => onClickSwap()}>
              <StackOSButton>Buy STACK</StackOSButton>
            </div>
          ) : (
            <button
              type="button"
              className="w-full bg-transparent border border-main-green text-main-green rounded-md px-9 py-3"
              onClick={() => connect(metamask)}
              disabled
            >
              {isConnecting && metamask?.id === pendingConnector?.id
                ? 'Connecting Wallet...'
                : 'Connect Wallet'}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Wallet;
