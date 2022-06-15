/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch } from 'react-redux';
import { useSelector } from 'src/redux/hooks';
import { IoMdClose } from 'react-icons/io';
import { Separator } from '@radix-ui/react-separator';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GeneralActions } from '@/redux/swap';
import { StackOSInput } from '@/components';
import SwapTokenSelectInfo from './SwapTokenSelectInfo';

const SwapTokenSelect = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const { general } = useSelector((state) => state);
  const { tokenOptions, tokenSelected } = general;

  const [searchInput, setSearchInput] = useState('');
  const [searchList, setSearchList] = useState(tokenOptions);

  useEffect(() => {
    setSearchList(tokenOptions);
  }, [tokenOptions]);

  useEffect(() => {
    const newSearchList = tokenOptions?.filter(({ title }) =>
      title.toLowerCase().includes(searchInput.toLowerCase())
    );

    setSearchList(newSearchList);
  }, [searchInput]);

  function onChangeToken(value: number) {
    dispatch(GeneralActions.setTokenSelected(tokenOptions.find((option) => option.id === value)));
  }

  return (
    <div className="px-4 py-6 bg-[#1F2937] rounded-md w-[360px] h-[340px] duration-500">
      <div className="flex flex-row justify-between mb-6">
        <p className="text-[#F9FAFB] font-semibold text-xl">{t('SWAP_TOKEN_SELECT_TITLE')}</p>
        <IoMdClose
          className="hover:cursor-pointer"
          color="#CFCFCF"
          size={20}
          onClick={() => dispatch(GeneralActions.setTokenSelectStatus(false))}
        />
      </div>
      <StackOSInput
        type="text"
        placeholder="Search for tokens"
        iconLeft
        value={searchInput}
        onChangeInput={(value) => setSearchInput(value)}
        fontSize={16}
      />
      <Separator className="h-px w-full bg-[#565A69] my-4" />
      <div className="overflow-y-scroll scrollbar h-48 pr-1">
        {searchList?.map((item: any) => (
          <div
            className={`
                    ${
                      tokenSelected?.id === item.id
                        ? 'bg-main-green text-[#111827]'
                        : 'hover:bg-[#2f3743] duration-300'
                    } relative rounded-md text-white group flex flex-row justify-between items-center px-4 py-2 my-px text-sm cursor-pointer
                  `}
            onClick={() => onChangeToken(item.id)}
            key={item.id}
          >
            <SwapTokenSelectInfo token={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SwapTokenSelect;
