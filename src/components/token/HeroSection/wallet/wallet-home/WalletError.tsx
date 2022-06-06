/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector } from 'src/redux/hooks';
import { BiChevronDown, BiChevronUp, BiInfoCircle, BiLinkExternal } from 'react-icons/bi';
import { MdErrorOutline } from 'react-icons/md';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@radix-ui/react-collapsible';
import { Separator } from '@radix-ui/react-separator';
import { useState } from 'react';

const WalletError = () => {
  const { general } = useSelector((state) => state);
  const { errorMessage } = general;

  const [isCollapseOpen, setIsCollapseOpen] = useState(false);

  return (
    <>
      <div className="flex flex-row justify-between">
        <a
          href="https://app.1inch.io/"
          target="_blank"
          rel="noreferrer"
          className="flex flex-row items-end mb-2 text-main-green hover:cursor-pointer"
        >
          <BiLinkExternal className="duration-500 text-xl" color="#AAFF00" />
          <p className="mx-2 font-normal text-sm duration-500">By 1inch</p>
        </a>
      </div>
      <div className="flex flex-col justify-center items-center text-white">
        <MdErrorOutline className="duration-500 text-xl" size={43} />
        <span className={`mt-2 ${isCollapseOpen ? 'mb-2' : 'mb-4'}`}>Something went wrong.</span>
        {!isCollapseOpen && (
          <span className="text-center">
            Try increasing your slippage tolerance. Note: fee on transfer and rebase tokens are
            incompatible with Uniswap V3.
          </span>
        )}
      </div>
      <Collapsible
        open={isCollapseOpen}
        onOpenChange={() => setIsCollapseOpen(!isCollapseOpen)}
        className={`w-full text-[#CFCFCF] ${!isCollapseOpen && 'mt-4'}`}
      >
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row">
            <BiInfoCircle className="duration-500 text-xl" color="#CFCFCF" />
            <p className="mx-2 font-normal text-sm duration-500">Error details</p>
          </div>
          <CollapsibleTrigger asChild className="hover:cursor-pointer">
            {isCollapseOpen ? <BiChevronUp /> : <BiChevronDown />}
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent>
          <Separator className="h-px w-full bg-[#565A69] my-2" />
          <div className="overflow-y-scroll scrollbar flex flex-col h-20 pr-1 child:my-1">
            <span>{errorMessage}</span>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </>
  );
};

export default WalletError;
