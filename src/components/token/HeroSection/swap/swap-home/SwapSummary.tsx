/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from 'src/redux/hooks';
import { useState } from 'react';
import {
  setErrorMessage,
  setErrorStatus,
  setLoading,
  setSettingsStatus,
  setSummaryStatus,
} from 'src/redux/actions/general';
import { BiChevronDown, BiChevronUp, BiCog, BiInfoCircle, BiLinkExternal } from 'react-icons/bi';
import { BsArrowDownCircle, BsArrowRight } from 'react-icons/bs';
import { useAccount, useProvider, useSendTransaction } from 'wagmi';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@radix-ui/react-collapsible';
import { Separator } from '@radix-ui/react-separator';
import { BigNumber } from 'ethers';
import { useTranslation } from 'react-i18next';
import { StackOSButton, StackOSIcon } from '@/components';
import { createSwap, fetchAllowance, fetchTransactionApproval } from '../../../../../services';

const SwapSummary = () => {
  const { t } = useTranslation();

  const {
    isLoading: isTransactionPending,
    isSuccess: isTransactionSuccess,
    sendTransaction,
  } = useSendTransaction();

  const { data: account } = useAccount();
  const dispatch = useDispatch();
  const provider = useProvider();
  const { general } = useSelector((state) => state);
  const {
    fromTokenAmount,
    tokenSelected,
    expectedOutput,
    fromTokenPrice,
    slippageAmount,
    networkSelected,
    stackAddress,
    estimatedGas,
    stackPrice,
    toTokenAmount,
  } = general;

  const swapParams = {
    fromTokenAddress:
      tokenSelected.id === 1 ? '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee' : tokenSelected.address,
    toTokenAddress: stackAddress,
    amount: fromTokenAmount * 10 ** 18,
    fromAddress: account?.address,
    slippage: slippageAmount,
    disableEstimate: true, // default false, error 400 'cannot estimate. Don't forget about miner fee. Try to leave the buffer of BNB for gas' on default
    allowPartialFill: false,
    chainId: tokenSelected.chainId,
  };

  const [isCollapseOpen, setIsCollapseOpen] = useState(false);

  const priceImpact = (
    ((stackPrice * toTokenAmount - fromTokenPrice * fromTokenAmount) /
      (fromTokenPrice * fromTokenAmount)) *
    100
  )?.toFixed(3);

  async function buildTxForApproveTradeWithRouter(tokenAddress: any, amount: any) {
    const transaction = await fetchTransactionApproval(tokenAddress, amount, networkSelected.id);

    if (transaction?.statusCode >= 400) {
      dispatch(setErrorStatus(true));
      dispatch(setErrorMessage(transaction?.description));
    }

    const gasLimit = await provider.estimateGas({
      ...transaction,
      from: account?.address,
    });

    return {
      gasLimit,
      to: transaction.to,
      gasPrice: transaction.gasPrice,
      value: BigNumber.from(transaction.value),
    };
  }

  async function handleSwap() {
    dispatch(setLoading(true));
    setIsCollapseOpen(false);

    const allowance = await fetchAllowance(
      swapParams.fromTokenAddress,
      account?.address,
      networkSelected.id
    );

    if (allowance?.statusCode >= 400) {
      dispatch(setErrorStatus(true));
      dispatch(setErrorMessage(allowance?.description));
    }

    if (allowance == 0) {
      const transactionForSign = await buildTxForApproveTradeWithRouter(
        swapParams.fromTokenAddress,
        0
      );

      sendTransaction({
        request: {
          to: transactionForSign.to,
          gasPrice: transactionForSign.gasPrice,
          value: BigNumber.from(transactionForSign.value),
        },
      });
    }

    const swapTransaction = await createSwap(swapParams, networkSelected.id);

    sendTransaction({
      request: {
        to: swapTransaction.to,
        from: swapTransaction.from,
        data: swapTransaction.data,
        gasPrice: swapTransaction.gasPrice,
        value: BigNumber.from(swapTransaction.value),
      },
    });

    dispatch(setLoading(false));
  }

  return (
    <div>
      <div className={`flex flex-row justify-between ${!isCollapseOpen && 'mb-7'}`}>
        {isTransactionPending || isTransactionSuccess ? (
          <a
            href="https://app.1inch.io/"
            target="_blank"
            rel="noreferrer"
            className="flex flex-row items-end mb-2 text-main-green hover:cursor-pointer"
          >
            <BiLinkExternal className="duration-500 text-xl" color="#AAFF00" />
            <p className="mx-2 font-normal text-sm duration-500">By 1inch</p>
          </a>
        ) : (
          <span className="text-[#F9FAFB]">{t('SWAP_SUMMARY_TITLE')}</span>
        )}
        {!isTransactionPending && (
          <BiCog
            className="hover:cursor-pointer"
            color="#CFCFCF"
            size={20}
            onClick={() => dispatch(setSettingsStatus(true))}
          />
        )}
      </div>
      {isTransactionPending || isTransactionSuccess ? (
        <div
          className={`flex justify-center items-center duration-500 ${
            isCollapseOpen ? 'flex-row' : 'flex-col'
          }`}
        >
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
        </div>
      ) : (
        <div
          className={`flex justify-center items-center duration-500 ${
            isCollapseOpen ? 'flex-row' : 'flex-col'
          }`}
        >
          <div className="flex flex-row justify-center items-center text-[#CDCDCD]">
            <span>{`${fromTokenAmount}`}</span>
            <StackOSIcon className="px-2 flex items-center" iconName={tokenSelected.icon} />
            <span>{`${tokenSelected.title}`}</span>
          </div>
          <div className="relative z-10 h-1 flex flex-row justify-center items-center py-6">
            {isCollapseOpen ? (
              <BsArrowRight color="#FFFFFF" className="mx-3" />
            ) : (
              <BsArrowDownCircle color="#AAFF00" size={20} />
            )}
          </div>
          <span className={`font-bold text-lg text-white ${!isCollapseOpen && 'hidden'}`}>
            {(expectedOutput * fromTokenAmount)?.toFixed(4)}
          </span>
          <div className="flex flex-row justify-center items-center text-[#CDCDCD]">
            <StackOSIcon className="px-2 flex items-center" iconName="stackos" />
            <span>STACK</span>
          </div>
          <span className={`font-bold text-4xl text-white ${isCollapseOpen && 'hidden'}`}>
            {(expectedOutput * fromTokenAmount)?.toFixed(4)}
          </span>
        </div>
      )}
      {isTransactionPending || isTransactionSuccess ? (
        <div className="flex flex-row justify-center items-center duration-500">
          <div className="flex flex-row justify-center items-center text-[#CDCDCD]">
            <span>{`${fromTokenAmount}`}</span>
            <StackOSIcon className="px-2 flex items-center" iconName={tokenSelected.icon} />
            <span>{`${tokenSelected.title}`}</span>
          </div>
          <div className="relative z-10 h-1 flex flex-row justify-center items-center py-6">
            <BsArrowRight color="#FFFFFF" className="mx-3" />
          </div>
          <span className="font-bold text-lg text-white">
            {(expectedOutput * fromTokenAmount)?.toFixed(4)}
          </span>
          <div className="flex flex-row justify-center items-center text-[#CDCDCD]">
            <StackOSIcon className="px-2 flex items-center" iconName="stackos" />
            <span>STACK</span>
          </div>
        </div>
      ) : (
        <div
          className={`flex flex-row justify-start items-center text-white duration-500 ${
            !isCollapseOpen && 'my-6'
          }`}
        >
          <Collapsible
            open={isCollapseOpen}
            onOpenChange={() => setIsCollapseOpen(!isCollapseOpen)}
            className="w-full duration-500"
          >
            <div className="flex flex-row justify-between items-center duration-500">
              <div className="flex flex-row">
                <BiInfoCircle className="duration-500 text-xl" color="#CFCFCF" />
                {expectedOutput > 0 && (
                  <span className="mx-2 font-normal text-sm duration-500">
                    {`1 ${tokenSelected.title} = ${expectedOutput} STACK `}
                    <span>{`($${fromTokenPrice})`}</span>
                  </span>
                )}
              </div>
              <CollapsibleTrigger asChild className="hover:cursor-pointer">
                {isCollapseOpen ? <BiChevronUp /> : <BiChevronDown />}
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="duration-500">
              <Separator className="h-px w-full bg-[#565A69] my-4" />
              <div className="text-white font-normal text-xs overflow-y-scroll scrollbar flex flex-col h-28 pr-1 child:my-1">
                <div className="flex flex-row justify-between">
                  <span>{t('SWAP_SUMMARY_ITEM1')}</span>
                  <span>{t('SWAP_SUMMARY_ITEM1_VALUE')}</span>
                </div>
                <div className="flex flex-row justify-between">
                  <span>{t('SWAP_SUMMARY_ITEM2')}</span>
                  <span>{`${estimatedGas}`}</span>
                </div>
                <div className="flex flex-row justify-between">
                  <span>{t('SWAP_SUMMARY_ITEM3')}</span>
                  <span>{`${priceImpact}%`}</span>
                </div>
                <div className="flex flex-row justify-between">
                  <span>{t('SWAP_SUMMARY_ITEM4')}</span>
                  <span>{`${slippageAmount}%`}</span>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      )}
      {isTransactionPending || isTransactionSuccess ? (
        <div className="flex flex-row justify-center items-center mt-6 w-full">
          <div className="w-full child:w-full" onClick={() => dispatch(setSummaryStatus(false))}>
            <StackOSButton
              disabled={isTransactionPending}
              className={`${isTransactionPending && 'bg-[#FDFDFD]'}`}
            >
              {t('SWAP_SUMMARY_FOOTER1')}
            </StackOSButton>
          </div>
        </div>
      ) : (
        <div className="flex flex-row justify-center items-center mt-6 w-full">
          <div className="w-full child:w-full" onClick={() => handleSwap()}>
            <StackOSButton>{t('SWAP_SUMMARY_FOOTER2')}</StackOSButton>
          </div>
        </div>
      )}
    </div>
  );
};

export default SwapSummary;
