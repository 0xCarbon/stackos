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
  address?: string;
}

interface Tokens {
  Ethereum: Token[];
  Polygon: Token[];
  BSC: Token[];
}

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
  console.log(ethers);
  const metamask = connectors[0];

  const ethereumChain = chains.find((chain) => chain.id === ETHEREUM);
  const binanceChain = chains.find((chain) => chain.id === BSC);
  const polygonChain = chains.find((chain) => chain.id === POLYGON);

  const networkOptions = [
    { title: 'Ethereum', subtitle: 'Uniswap (v2)', icon: 'uniswap', ...ethereumChain },
    { title: 'Polygon', subtitle: 'Dfyn', icon: 'dfyn', ...polygonChain },
    { title: 'BSC', subtitle: 'PancakeSwap (v2)', icon: 'pancakeswap', ...binanceChain },
  ];

  const [stackAddress, setStackAddress] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [fromTokenAmount, setFromTokenAmount] = useState<number>(1);
  const [fromTokenPrice, setFromTokenPrice] = useState<number>(0);
  const [toTokenAmount, setToTokenAmount] = useState<number>(0);
  const [toTokenPrice, setToTokenPrice] = useState<number>(0);
  const [expectedOutput, setExpectedOutput] = useState<number>(0);
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
        {
          id: 2,
          title: 'USDC',
          icon: 'usdc',
          address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
        },
        {
          id: 3,
          title: 'USDT',
          icon: 'usdt',
          address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
        },
        {
          id: 43,
          title: 'WETH',
          icon: 'weth',
          address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
        },
      ],
      Polygon: [
        {
          id: 1,
          title: 'MATIC',
          icon: 'matic',
          address: '0x0000000000000000000000000000000000001010',
        },
        {
          id: 2,
          title: 'USDC',
          icon: 'usdc',
          address: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
        },
        {
          id: 3,
          title: 'USDT',
          icon: 'usdt',
          address: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
        },
      ],
      BSC: [
        { id: 1, title: 'BNB', icon: 'bnb', address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee' },
        {
          id: 2,
          title: 'BUSD',
          icon: 'busd',
          address: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
        },
        { id: 3, title: 'USDT', icon: 'usdt' },
        {
          id: 43,
          title: 'WBNB',
          icon: 'wbnb',
          address: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
        },
      ],
    };

    const stackAddresses: any = {
      Ethereum: '0x56A86d648c435DC707c8405B78e2Ae8eB4E60Ba4',
      BSC: '0x6855f7bb6287F94ddcC8915E37e73a3c9fEe5CF3',
      Polygon: '0x980111ae1B84E50222C8843e3A7a038F36Fecd2b',
    };

    setTokenOptions(tokens[networkSelected.title as keyof Tokens]);
    setStackAddress(stackAddresses[networkSelected.title]);
  }, [networkSelected]);

  useEffect(() => {
    setTokenSelected(tokenOptions[0]);
  }, [tokenOptions]);

  useEffect(() => {
    setupNetwork();
  }, [activeChain]);

  useEffect(() => {
    fetchQuoteData();
  }, [fromTokenAmount, tokenSelected]);

  const walletAddress = account?.address;
  const broadcastApiUrl = 'https://tx-gateway.1inch.io/v1.1/' + networkSelected.id + '/broadcast';
  const apiBaseUrl = 'https://api.1inch.io/v4.0/' + networkSelected.id;

  const swapParams = {
    fromTokenAddress: tokenSelected.address, // BNB
    toTokenAddress: stackAddress,
    amount: fromTokenAmount * 10 ** 18,
    fromAddress: walletAddress,
    slippage: 1,
    disableEstimate: true, // default false, error 400 'cannot estimate. Don't forget about miner fee. Try to leave the buffer of BNB for gas' on default
    allowPartialFill: false,
  };

  const fetchQuoteData = async () => {
    setLoading(true);
    setToTokenAmount(0);
    setExpectedOutput(0);
    setFromTokenPrice(0);
    setToTokenPrice(0);

    console.log('asdasd');

    if (fromTokenAmount > 0) {
      const response = await fetch(apiRequestUrl('/quote', swapParams)).then((res) => res.json());
      const result = Number((response.toTokenAmount * 10 ** -18)?.toFixed(5));

      setToTokenAmount(result);
      setExpectedOutput(Number((1 / result)?.toFixed(4)));
      setFromTokenPrice(0.123);
      setToTokenPrice(0.789);
    }

    setLoading(false);
  };

  function onChangeNetwork(value: number) {
    if (!activeChain) {
      connect(metamask);
    }

    switchNetwork?.(value);
  }

  function onChangeToken(value: number) {
    setTokenSelected(tokenOptions.find((option) => option.id === value) as Token);
    console.log(tokenSelected);
  }

  function setupNetwork() {
    if (activeChain && activeChain?.id !== networkSelected?.id) {
      setNetworkSelected(networkOptions.find((option) => option.id === activeChain?.id) as Token);

      if (!account) {
        connect(metamask);
      }
    }
    console.log(account);
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
    console.log(swapParams);
    console.log(networkSelected);
    console.log(account);
    console.log(activeChain);
    const allowance = await checkAllowance(swapParams.fromTokenAddress, walletAddress);

    console.log('Allowance: ', allowance);

    if (allowance == 0) {
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
              value={fromTokenAmount}
              price={fromTokenPrice}
              onChangeInput={(value) => setFromTokenAmount(value)}
            />
            <div className="relative z-10 h-1 flex flex-row justify-center items-center">
              <BsArrowDownCircle color="#AAFF00" size={26} />
            </div>
            <StackOSInput value={toTokenAmount} price={toTokenPrice} disabled />
            <div className="flex flex-row items-end my-6 text-white">
              {loading ? (
                <svg
                  role="status"
                  className="w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-[#1F2937]"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              ) : (
                <BiInfoCircle className="duration-500 text-xl" color="#CFCFCF" />
              )}
              {expectedOutput > 0 ? (
                <span className="mx-2 font-normal text-sm duration-500">
                  1 MATIC = {expectedOutput}
                  <span>($0.1234)</span>
                </span>
              ) : (
                <p className="mx-2 font-normal text-sm duration-500">
                  {loading ? 'Fetching best price...' : 'Enter an amount'}
                </p>
              )}
            </div>
            <div className="flex flex-row justify-center items-center w-full">
              {account?.address ? (
                <div className="w-full child:w-full" onClick={() => onClickSwap()}>
                  <StackOSButton disabled={!fromTokenAmount}>Buy STACK</StackOSButton>
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
