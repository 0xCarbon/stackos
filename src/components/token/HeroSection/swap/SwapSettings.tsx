/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from 'src/redux/hooks';
import { IoMdClose } from 'react-icons/io';
import { useEffect, useState } from 'react';
import { setSettingsStatus, setSlippageAmount } from 'src/redux/actions/general';
import { useTranslation } from 'react-i18next';
import { StackOSButton, StackOSInput, StackOSSwitch } from '@/components';

const SwapSettings = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const { general } = useSelector((state) => state);
  const { slippageAmount } = general;

  const [enabled, setEnabled] = useState(true);
  const [newSlippage, setNewSlippage] = useState(slippageAmount);

  useEffect(() => {
    setNewSlippage(0.1);
  }, [enabled]);

  function canConfirmSettings() {
    if (enabled) return true;

    return newSlippage !== slippageAmount;
  }

  function onClickConfirm() {
    dispatch(setSlippageAmount(newSlippage));
    dispatch(setSettingsStatus(false));
  }

  return (
    <div className="px-4 py-6 bg-[#1F2937] rounded-md w-[320px] sm:w-[360px] h-[340px] duration-500">
      <div className="flex flex-row justify-between mb-6">
        <span className="text-[#F9FAFB]">{t('SWAP_SETTINGS_TITLE')}</span>
        <IoMdClose
          className="hover:cursor-pointer text-[#CFCFCF] hover:text-[#e15b5b] duration-500"
          size={20}
          onClick={() => dispatch(setSettingsStatus(false))}
        />
      </div>
      <p className="text-white mb-3">{t('SWAP_SETTINGS_ITEM1')}</p>
      <div className="flex flex-row child:flex-initial gap-3 mb-6">
        <div
          className={`flex justify-center items-center w-[40%] border rounded-md gap-2 ${
            enabled ? 'border-main-green' : 'border-[#6B7280]'
          }`}
        >
          <StackOSSwitch
            value={enabled}
            onChange={(a) => {
              setEnabled(a);
            }}
          />
          <span className={`${enabled ? 'text-main-green' : 'text-white'}`}>Auto</span>
        </div>
        <StackOSInput
          value={newSlippage}
          onChangeInput={(value) => setNewSlippage(value)}
          disabled={enabled}
          type="number"
          placeholder="0.10"
        />
      </div>
      <p className="text-white mb-4">{t('SWAP_SETTINGS_ITEM2')}</p>
      <StackOSInput disabled={enabled} type="number" placeholder="40" />
      <div className="flex flex-row justify-center items-center w-full mt-9">
        <div className="w-full child:w-full" onClick={() => onClickConfirm()}>
          <StackOSButton disabled={!canConfirmSettings()}>
            {t('SWAP_SETTINGS_FOOTER')}
          </StackOSButton>
        </div>
      </div>
    </div>
  );
};

export default SwapSettings;
