/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from 'src/redux/hooks';
import { IoMdClose } from 'react-icons/io';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BiInfoCircle } from 'react-icons/bi';
import { setSettingsStatus, setSlippageAmount } from '@/redux/actions/swap';
import { StackOSToggleGroup } from '@/components';
import SwapButton from './SwapButton';

const slippageValues = [
  { id: 1, title: '0.1%', value: 0.1 },
  { id: 2, title: '0.5%', value: 0.5 },
  { id: 3, title: '1%', value: 1 },
  { id: 4, title: '3%', value: 3 },
  { id: 5, title: 'custom', value: null },
];

const SwapSettings = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const { swap } = useSelector((state) => state);
  const { slippageAmount } = swap;

  const [newSlippage, setNewSlippage] = useState<number | null>(slippageAmount);

  function onClickConfirm() {
    if (newSlippage) {
      dispatch(setSlippageAmount(newSlippage));
      dispatch(setSettingsStatus(false));
    }
  }

  return (
    <div
      data-cy="swap-settings"
      className="px-4 py-4 bg-[#1F2937] rounded-md w-[360px] h-[340px] duration-500"
    >
      <div className="flex flex-row justify-between mb-6">
        <span className="text-[#F9FAFB] text-xl font-semibold">{t('SWAP_SETTINGS_TITLE')}</span>
        <IoMdClose
          className="hover:cursor-pointer text-[#CFCFCF] hover:text-[#e15b5b] duration-500"
          size={20}
          onClick={() => dispatch(setSettingsStatus(false))}
        />
      </div>
      <p className="text-white text-lg mb-3">{t('SWAP_SETTINGS_SUBTITLE')}</p>
      <StackOSToggleGroup
        defaultValue={newSlippage as number}
        onChange={(value) => setNewSlippage(value.value)}
        data={slippageValues}
      />
      <div className="flex mt-[1.93rem]">
        <BiInfoCircle size={16} className="duration-500 text-xl mr-2" color="#CFCFCF" />
        <span className="text-[#CFCFCF] text-[0.75rem] w-[17.5rem]">{t('SWAP_SETTINGS_INFO')}</span>
      </div>
      <div className="flex flex-row justify-center items-center w-full mt-9">
        <div
          data-cy="settings-button"
          className="w-full child:w-full"
          onClick={() => onClickConfirm()}
        >
          <SwapButton disabled={slippageAmount === newSlippage || !newSlippage}>
            {t('SWAP_SETTINGS_FOOTER')}
          </SwapButton>
        </div>
      </div>
    </div>
  );
};

export default SwapSettings;
