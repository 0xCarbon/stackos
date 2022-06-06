/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from 'src/redux/hooks';
import { useState } from 'react';
import { setSettingsStatus } from 'src/redux/actions/general';
import { BiChevronDown, BiChevronUp, BiCog, BiInfoCircle } from 'react-icons/bi';
import { BsArrowDownCircle, BsArrowRight } from 'react-icons/bs';
import { useSendTransaction } from 'wagmi';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@radix-ui/react-collapsible';
import { Separator } from '@radix-ui/react-separator';
import { StackOSIcon } from '@/components';

const WalletSummary = () => {
  const { isLoading: isTransactionPending, isSuccess: isTransactionSuccess } = useSendTransaction();

  const dispatch = useDispatch();
  const { general } = useSelector((state) => state);
  const { fromTokenAmount, tokenSelected, loading, expectedOutput, fromTokenPrice } = general;

  const [isCollapseOpen, setIsCollapseOpen] = useState(false);

  return (
    <div>
      <div className={`flex flex-row justify-between ${!isCollapseOpen && 'mb-7'}`}>
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
      <div
        className={`flex flex-row justify-start items-center text-white ${
          !isCollapseOpen && 'my-6'
        }`}
      >
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
            <p className="mx-2 font-normal text-sm duration-500">Fetching best price...</p>
          </div>
        ) : (
          <Collapsible
            open={isCollapseOpen}
            onOpenChange={() => setIsCollapseOpen(!isCollapseOpen)}
            className="w-full"
          >
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row">
                <BiInfoCircle className="duration-500 text-xl" color="#CFCFCF" />
                {expectedOutput > 0 ? (
                  <span className="mx-2 font-normal text-sm duration-500">
                    {`1 ${tokenSelected.title} = ${expectedOutput} STACK `}
                    <span>{`($${fromTokenPrice})`}</span>
                  </span>
                ) : (
                  <p className="mx-2 font-normal text-sm duration-500">Enter an amount</p>
                )}
              </div>
              <CollapsibleTrigger asChild className="hover:cursor-pointer">
                {isCollapseOpen ? <BiChevronUp /> : <BiChevronDown />}
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent>
              <Separator className="h-px w-full bg-[#565A69] my-4" />
              <div className="overflow-y-scroll scrollbar flex flex-col h-20 pr-1 child:my-1">
                <div className="flex flex-row justify-between">
                  <span>Liquidity provider fee</span>
                  <span>Value</span>
                </div>
                <div className="flex flex-row justify-between">
                  <span>{'<INTEGRATOR> fee'}</span>
                  <span>4.12 DAI</span>
                </div>
                <div className="flex flex-row justify-between">
                  <span>Price impact</span>
                  <span>0.00%</span>
                </div>
                <div className="flex flex-row justify-between">
                  <span>Minimum received</span>
                  <span>0.89 ETH</span>
                </div>
                <div className="flex flex-row justify-between">
                  <span>Slippage tolerance</span>
                  <span>0.05%</span>
                </div>
                <span>
                  Output is estimated. You will receive at least 84.9572 DAI or the transaction will
                  revert.
                </span>
              </div>
            </CollapsibleContent>
          </Collapsible>
        )}
      </div>
    </div>
  );
};

export default WalletSummary;
