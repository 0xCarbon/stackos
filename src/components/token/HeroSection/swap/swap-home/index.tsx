/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from 'src/redux/hooks';
import { BiCog, BiInfoCircle, BiLinkExternal } from 'react-icons/bi';
import { useEffect, useState } from 'react';
import { useAccount, useConnect } from 'wagmi';
import {
  setErrorMessage,
  setErrorStatus,
  setEstimatedGas,
  setExpectedOutput,
  setFromTokenAmount,
  setFromTokenPrice,
  setLoading,
  setSettingsStatus,
  setStackPrice,
  setSummaryStatus,
  setTokenSelectStatus,
  setToTokenAmount,
  setWalletModalStatus,
} from 'src/redux/actions/general';
import { fetchCoinPrice, fetchSwapQuote } from 'src/services';
import { BsArrowDownCircle } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';
import { StackOSInput, StackOSModal, StackOSIcon } from '@/components';
import SwapError from './SwapError';
import SwapSummary from './SwapSummary';
import SwapButton from '../SwapButton';
import SwapGetBalance from './SwapGetBalance';

const SwapHome = () => {
  const { t } = useTranslation();

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
    tokenSelected,
    networkSelected,
    slippageAmount,
    isErrorOpen,
    isSummaryOpen,
    isWalletModalOpen,
    tokenBalance,
  } = general;

  const { connect, connectors, isConnecting } = useConnect();
  const { data: account } = useAccount();
  const [insufficientBalance, setInsufficientBalance] = useState<boolean>(false);

  useEffect(() => {
    setInsufficientBalance(false);

    if (fromTokenAmount && tokenBalance && (tokenBalance === 0 || tokenBalance < fromTokenAmount)) {
      setInsufficientBalance(true);
    }
  }, [fromTokenAmount, tokenBalance]);

  useEffect(() => {
    fetchQuoteData();
  }, [fromTokenAmount, tokenSelected]);

  const swapParams = {
    fromTokenAddress:
      tokenSelected.id === 1 ? '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee' : tokenSelected.address,
    toTokenAddress: stackAddress,
    amount: fromTokenAmount && fromTokenAmount * 10 ** 18,
    fromAddress: account?.address,
    slippage: slippageAmount,
    disableEstimate: true, // default false, error 400 'cannot estimate. Don't forget about miner fee. Try to leave the buffer of BNB for gas' on default
    allowPartialFill: false,
    chainId: tokenSelected.chainId,
  };

  const fetchQuoteData = async () => {
    dispatch(setLoading(true));
    dispatch(setToTokenAmount(0));
    dispatch(setExpectedOutput(0));
    dispatch(setFromTokenPrice(0));
    dispatch(setStackPrice(0));

    if (fromTokenAmount && fromTokenAmount > 0) {
      const quote = await fetchSwapQuote(swapParams, networkSelected.id);

      if (quote?.statusCode >= 400) {
        dispatch(setErrorStatus(true));
        dispatch(setErrorMessage(quote?.description));
      }

      dispatch(setEstimatedGas(quote?.estimatedGas));

      const result = Number(quote.toTokenAmount * 10 ** -18);

      const stack = await fetchCoinPrice('stackos', 'usd');

      if (stack?.statusCode >= 400) {
        dispatch(setErrorStatus(true));
        dispatch(setErrorMessage(stack?.description));
      }

      const tokenIn = await fetchCoinPrice(tokenSelected.coin, 'usd');

      if (tokenIn?.statusCode >= 400) {
        dispatch(setErrorStatus(true));
        dispatch(setErrorMessage(tokenIn?.description));
      }

      dispatch(setFromTokenPrice(tokenIn[tokenSelected.coin]?.usd));

      dispatch(setStackPrice(stack?.stackos?.usd));

      dispatch(setToTokenAmount(Number(result?.toFixed(5))));
      dispatch(setExpectedOutput(Number(((1 / fromTokenAmount) * result)?.toFixed(4))));
    }

    dispatch(setLoading(false));
  };
  return (
    <div className="px-4 py-4 bg-[#1F2937] rounded-md w-[360px] h-[340px] duration-500">
      {isSummaryOpen && <SwapSummary />}
      {isErrorOpen && <SwapError />}
      {!isSummaryOpen && !isErrorOpen && (
        <>
          <div className="flex flex-row justify-between mb-4">
            <a
              href="https://app.1inch.io/"
              target="_blank"
              rel="noreferrer"
              className="flex flex-row items-end mb-2 text-main-green hover:cursor-pointer hover:scale-105 duration-500"
            >
              <BiLinkExternal className="duration-500 text-xl" color="#AAFF00" />
              <p className="mx-2 font-normal text-sm duration-500">By 1inch</p>
            </a>
            <BiCog
              className="hover:cursor-pointer text-[#CFCFCF] hover:text-main-green duration-500"
              size={20}
              onClick={() => dispatch(setSettingsStatus(true))}
            />
          </div>
          <StackOSInput
            showPrice
            optionSelected={tokenSelected}
            onClickOption={() => dispatch(setTokenSelectStatus(true))}
            value={fromTokenAmount}
            price={fromTokenAmount && fromTokenPrice * fromTokenAmount}
            onChangeInput={(value) => dispatch(setFromTokenAmount(value))}
            type="number"
          />
          <div className="relative z-10 h-1 flex flex-row justify-center items-center">
            <BsArrowDownCircle
              className="bg-[#1F2937] rounded-full p-[0.2rem]"
              color="#AAFF00"
              size={30}
            />
          </div>
          <StackOSInput
            value={toTokenAmount}
            showPrice
            price={toTokenAmount && stackPrice * toTokenAmount}
            disabled
            type="number"
          />
          <div className="flex flex-row justify-start items-center text-white my-6">
            {loading ? (
              <div className="flex flex-row justify-start items-center">
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
                <p className="mx-2 font-normal text-sm duration-500">{t('SWAP_HOME_INFO1')}</p>
              </div>
            ) : (
              <>
                <BiInfoCircle className="duration-500 text-xl" color="#CFCFCF" />
                {expectedOutput > 0 ? (
                  <span className="mx-2 font-normal text-sm duration-500">
                    {`1 ${tokenSelected.title} = ${expectedOutput} STACK `}
                    <span>{`($${fromTokenPrice})`}</span>
                  </span>
                ) : (
                  <p className="mx-2 font-normal text-sm duration-500">{t('SWAP_HOME_INFO2')}</p>
                )}
              </>
            )}
          </div>
          <div className="flex flex-row justify-center items-center mt-6 w-full">
            {account?.address ? (
              <div className="w-full child:w-full" onClick={() => dispatch(setSummaryStatus(true))}>
                {tokenBalance === null ? (
                  <SwapGetBalance />
                ) : (
                  <SwapButton
                    className={`${fromTokenAmount && !loading && 'text-[#020305]'}`}
                    disabled={!fromTokenAmount || loading || insufficientBalance}
                  >
                    {insufficientBalance ? 'Insufficient balance' : t('SWAP_HOME_BUTTON')}
                  </SwapButton>
                )}
              </div>
            ) : (
              <button
                type="button"
                className="w-full bg-transparent border border-main-green hover:bg-main-green text-main-green hover:text-main-blue duration-500 rounded-md px-9 py-3"
                onClick={() => dispatch(setWalletModalStatus(true))}
              >
                {isConnecting ? 'Connecting Wallet...' : 'Connect Wallet'}
              </button>
            )}
          </div>
        </>
      )}
      <StackOSModal
        showModal={isWalletModalOpen}
        className="text-center text-white"
        title={
          <span className="font-semibold text-xl text-[#F9FAFB]">
            {t('SWAP_MODAL_WALLET_TITLE')}
          </span>
        }
        footer={
          <div
            className="text-center text-[#020305] px-9 py-1 rounded-md bg-[#FDFDFD] hover:cursor-pointer"
            onClick={() => dispatch(setWalletModalStatus(false))}
          >
            <span>{t('SWAP_MODAL_WALLET_FOOTER')}</span>
          </div>
        }
      >
        <div className="py-6 flex flex-col sm:flex-row justify-center items-center">
          {connectors.map((connector) => (
            <button
              disabled={!connector.ready}
              key={connector.id}
              onClick={() => {
                connect(connector);
                dispatch(setWalletModalStatus(false));
              }}
              type="button"
              className="px-2 py-2 mx-2 my-2 hover:bg-[#374151] duration-500 rounded-md"
            >
              <div className="flex flex-col justify-center items-center">
                <StackOSIcon width={60} height={60} iconName={connector.id} />
                <span>{connector.name}</span>
              </div>
            </button>
          ))}
        </div>
      </StackOSModal>
    </div>
  );
};

export default SwapHome;
