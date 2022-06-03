/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from 'src/redux/hooks';
import { BiCog, BiInfoCircle, BiLinkExternal } from 'react-icons/bi';
import { useEffect, useState } from 'react';
import { useAccount, useConnect, useNetwork, useProvider, useSendTransaction } from 'wagmi';
import {
  setExpectedOutput,
  setFromTokenAmount,
  setFromTokenPrice,
  setLoading,
  setSettingsStatus,
  setStackPrice,
  setTokenSelected,
  setToTokenAmount,
} from 'src/redux/actions/general';
import {
  createSwap,
  fetchAllowance,
  fetchCoinPrice,
  fetchSwapQuote,
  fetchTransactionApproval,
  getBroadCastTransaction,
} from 'src/services';
import { BigNumber } from 'ethers';
import { BsArrowDownCircle } from 'react-icons/bs';
import { StackOSInput, StackOSIcon } from '@/components';
import StackOSButton from '../../../StackOSButton';

const WalletDefault = () => {
  const dispatch = useDispatch();
  const { general } = useSelector((state) => state);
  const {
    stackPrice,
    loading,
    expectedOutput,
    fromTokenAmount,
    fromTokenPrice,
    toTokenAmount,
    stackAddress,
    tokenOptions,
    tokenSelected,
    networkSelected,
    slippageAmount,
  } = general;

  const { connect, connectors, isConnecting, pendingConnector } = useConnect();
  const { activeChain } = useNetwork();
  const { data: account } = useAccount();
  const {
    data: transactionResponse,
    // isIdle,
    // isError,
    isLoading: isTransactionPending,
    isSuccess: isTransactionSuccess,
    sendTransaction,
  } = useSendTransaction();
  const provider = useProvider();

  const [isSummaryOpen, setSummaryOpen] = useState(false);

  const metamask = connectors[0];

  useEffect(() => {
    fetchQuoteData();
  }, [fromTokenAmount, tokenSelected]);

  useEffect(() => {
    dispatch(setTokenSelected(tokenOptions[0]));
  }, [tokenOptions]);

  useEffect(() => {
    // console.log(transactionResponse);
    if (transactionResponse) getBroadCastTransaction(transactionResponse?.data, networkSelected.id);
  }, [transactionResponse]);

  const walletAddress = account?.address;

  const swapParams = {
    fromTokenAddress: tokenSelected.address,
    toTokenAddress: stackAddress,
    amount: fromTokenAmount * 10 ** 18,
    fromAddress: walletAddress,
    slippage: slippageAmount,
    disableEstimate: true, // default false, error 400 'cannot estimate. Don't forget about miner fee. Try to leave the buffer of BNB for gas' on default
    allowPartialFill: false,
  };

  function onChangeToken(value: number) {
    // console.log(tokenOptions.find((option) => option.id === value));
    dispatch(setTokenSelected(tokenOptions.find((option) => option.id === value)));
    // console.log(tokenSelected);
  }

  const fetchQuoteData = async () => {
    // console.log(networkSelected);
    dispatch(setLoading(true));
    dispatch(setToTokenAmount(0));
    dispatch(setExpectedOutput(0));
    dispatch(setFromTokenPrice(0));
    dispatch(setStackPrice(0));

    // console.log('asdasd');

    if (fromTokenAmount > 0) {
      //   console.log(networkSelected.id);
      const response = await fetchSwapQuote(swapParams, networkSelected.id);
      //   console.log(response);
      const result = Number((response.toTokenAmount * 10 ** -18)?.toFixed(5));

      const { stackos } = await fetchCoinPrice('stackos', 'usd');
      const tokenIn = await fetchCoinPrice(tokenSelected.title, 'usd');
      //   console.log(stackos);
      //   console.log(tokenIn);
      //   console.log(tokenIn[tokenSelected.icon]);

      dispatch(setFromTokenPrice(tokenIn[tokenSelected.icon]?.usd));

      dispatch(setStackPrice(stackos?.usd));

      dispatch(setToTokenAmount(result));
      dispatch(setExpectedOutput(Number((1 / result)?.toFixed(4))));
    }

    dispatch(setLoading(false));
  };

  async function signAndSendTransaction(transaction: any) {
    // const {rawTransaction} = await web3.eth.accounts.signTransaction(transaction, privateKey);
    // console.log(transaction);

    const rawTransaction = await sendTransaction({
      request: {
        to: transaction.to,
        from: transaction.from,
        data: transaction.data,
        gasPrice: transaction.gasPrice,
        value: BigNumber.from(transaction.value),
      },
    });

    // console.log(rawTransaction);
  }

  async function buildTxForApproveTradeWithRouter(tokenAddress: any, amount: any) {
    const transaction = await fetchTransactionApproval(tokenAddress, amount, networkSelected.id);

    // console.log(transaction);

    const gasLimit = await provider.estimateGas({
      ...transaction,
      from: walletAddress,
    });
    // console.log(gasLimit);

    // enviando o 'data' do transaction aqui faz o metamask ficar em loading infinito
    return {
      gasLimit,
      to: transaction.to,
      gasPrice: transaction.gasPrice,
      value: BigNumber.from(transaction.value),
    };
  }

  async function handleSwap() {
    // console.log(swapParams);
    // console.log(networkSelected);
    // console.log(account);
    // console.log(activeChain);
    const allowance = await fetchAllowance(
      swapParams.fromTokenAddress,
      walletAddress,
      networkSelected.id
    );

    // console.log('Allowance: ', allowance);

    if (allowance == 0) {
      // First, let's build the body of the transaction
      const transactionForSign = await buildTxForApproveTradeWithRouter(
        swapParams.fromTokenAddress,
        0
      );
      //   console.log('Transaction for approve: ', transactionForSign);

      // Send a transaction and get its hash
      const approveTxHash = await signAndSendTransaction(transactionForSign);

      //   console.log('Approve tx hash: ', approveTxHash);
    }

    // First, let's build the body of the transaction
    const swapTransaction = await createSwap(swapParams, networkSelected.id);
    // console.log('Transaction for swap: ', swapTransaction);

    // Send a transaction and get its hash
    const swapTxHash = await signAndSendTransaction(swapTransaction);
    // console.log('Swap transaction hash: ', swapTxHash);
  }

  function onClickMainButton() {
    if (isSummaryOpen) handleSwap();
    else setSummaryOpen(true);
  }

  return (
    <div className="mt-20 px-4 py-6 bg-[#1F2937] rounded-md w-[360px] h-[340px]">
      {isSummaryOpen ? (
        <>
          <div className="flex flex-row justify-between mb-7">
            <span className="text-[#F9FAFB]">Summary</span>
            {!isTransactionPending && (
              <BiCog
                className="hover:cursor-pointer"
                color="#CFCFCF"
                size={20}
                onClick={() => dispatch(setSettingsStatus(true))}
              />
            )}
          </div>
          <div className="flex flex-col justify-center items-center">
            {isTransactionPending || isTransactionSuccess ? (
              <>
                <div className="flex flex-row justify-center items-center">
                  {isTransactionPending && (
                    <svg
                      role="status"
                      className="w-20 h-20 text-main-green animate-spin dark:text-gray-600 fill-[#b0c784]"
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
                  )}
                  {isTransactionSuccess && (
                    <StackOSIcon
                      className="flex items-center"
                      iconName="stackos-big"
                      width={65}
                      height={65}
                    />
                  )}
                </div>
                <span className="text-white mt-5">
                  {`Transaction ${isTransactionPending ? 'Pending' : 'Submitted'}`}
                </span>
              </>
            ) : (
              <>
                <div className="flex flex-row justify-center items-center text-[#CDCDCD]">
                  <span>{`${fromTokenAmount}`}</span>
                  <StackOSIcon className="px-2 flex items-center" iconName={tokenSelected.icon} />
                  <span>{`${tokenSelected.title}`}</span>
                </div>
                <div className="relative z-10 h-1 flex flex-row justify-center items-center py-8">
                  <BsArrowDownCircle color="#AAFF00" size={20} />
                </div>
                <div className="flex flex-row justify-center items-center text-[#CDCDCD]">
                  <StackOSIcon className="px-2 flex items-center" iconName="stackos" />
                  <span>STACK</span>
                </div>
              </>
            )}
          </div>
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
              onClick={() => dispatch(setSettingsStatus(true))}
            />
          </div>
          <StackOSInput
            showPrice
            dropdownOptions={tokenOptions}
            selected={tokenSelected.id}
            onChangeSelection={(value) => onChangeToken(value)}
            value={fromTokenAmount}
            price={fromTokenPrice}
            onChangeInput={(value) => dispatch(setFromTokenAmount(value))}
          />
          <div className="relative z-10 h-1 flex flex-row justify-center items-center">
            <BsArrowDownCircle color="#AAFF00" size={26} />
          </div>
          <StackOSInput value={toTokenAmount} showPrice price={stackPrice} disabled />
        </>
      )}
      <div className="flex flex-row justify-start items-center my-6 text-white">
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
            {`1 ${tokenSelected.title} = ${expectedOutput} STACK `}
            <span>{`($${fromTokenPrice})`}</span>
          </span>
        ) : (
          <p className="mx-2 font-normal text-sm duration-500">
            {loading ? 'Fetching best price...' : 'Enter an amount'}
          </p>
        )}
      </div>
      <div className="flex flex-row justify-center items-center w-full">
        {account?.address ? (
          <div className="w-full child:w-full" onClick={() => onClickMainButton()}>
            <StackOSButton disabled={!fromTokenAmount || loading}>
              {isSummaryOpen ? 'Add Tokens to Wallet' : 'Buy STACK'}
            </StackOSButton>
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
    </div>
  );
};

export default WalletDefault;
