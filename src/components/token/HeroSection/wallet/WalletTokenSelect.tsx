/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from 'src/redux/hooks';
import { IoMdClose } from 'react-icons/io';
import { setTokenSelected, setTokenSelectStatus } from 'src/redux/actions/general';
import { Separator } from '@radix-ui/react-separator';
import { StackOSIcon, StackOSInput } from '@/components';

const WalletTokenSelect = () => {
  const dispatch = useDispatch();
  const { general } = useSelector((state) => state);
  const { tokenOptions, tokenSelected } = general;

  function onChangeToken(value: number) {
    dispatch(setTokenSelected(tokenOptions.find((option) => option.id === value)));
  }

  return (
    <div className="px-4 py-6 bg-[#1F2937] rounded-md w-[360px] h-[340px] duration-500">
      <div className="flex flex-row justify-between mb-6">
        <p className="text-[#F9FAFB] font-semibold text-xl">Select a Token</p>
        <IoMdClose
          className="hover:cursor-pointer"
          color="#CFCFCF"
          size={20}
          onClick={() => dispatch(setTokenSelectStatus(false))}
        />
      </div>
      <StackOSInput />
      <Separator className="h-px w-full bg-[#565A69] my-4" />
      <div className="overflow-y-scroll scrollbar h-48 pr-1">
        {tokenOptions?.map((item: any) => (
          <div
            className={`
                    ${
                      tokenSelected?.id === item.id ? 'bg-main-green text-[#111827]' : ''
                    } relative rounded-md text-white group flex flex-row justify-between items-center px-4 py-2 my-px text-sm cursor-pointer
                  `}
            onClick={() => onChangeToken(item.id)}
            key={item.id}
          >
            <div className="flex flex-row justify-center items-center">
              <StackOSIcon className="mr-3 flex items-center" iconName={item.icon} />
              <div className="flex flex-col justify-start">
                <span className="font-semibold">{item.title}</span>
                <span
                  className={`${tokenSelected?.id === item.id && 'text-[#2D3948]'} text-[#888D9B]`}
                >
                  {item.subtitle}
                </span>
              </div>
            </div>
            <span>1.234</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WalletTokenSelect;
