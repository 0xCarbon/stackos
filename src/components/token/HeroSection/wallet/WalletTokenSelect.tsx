/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from 'src/redux/hooks';
import { IoMdClose } from 'react-icons/io';
import { useEffect, useState } from 'react';
import { setSettingsStatus, setSlippageAmount } from 'src/redux/actions/general';
import { StackOSButton, StackOSInput, StackOSSwitch } from '@/components';
import { Separator } from '@radix-ui/react-separator';

const WalletTokenSelect = () => {
  const dispatch = useDispatch();
  const { general } = useSelector((state) => state);
  const { tokenOptions, tokenSelected } = general;

  const [searchInput, setSearchInput] = useState();

  return (
    <div className="px-4 py-6 bg-[#1F2937] rounded-md w-[360px] h-[340px] duration-500">
      <div className="flex flex-row justify-between mb-6">
        <p className="text-[#F9FAFB] font-extralight text-base">Select a Token</p>
        <IoMdClose
          className="hover:cursor-pointer"
          color="#CFCFCF"
          size={20}
          onClick={() => dispatch(setSettingsStatus(false))}
        />
      </div>
      <StackOSInput />
      <Separator className="w-[3px] bg-main-green mr-8" />
    </div>
  );
};

export default WalletTokenSelect;
