/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import StackOSDropdown from './StackOSDropdown';

interface Token {
  id: number;
  title: string;
  icon: string;
  subtitle?: string;
}

interface Props {
  selected?: number;
  dropdownOptions?: any;
  onChangeSelection?: (value: number) => void;
  onChangeInput?: (value: number) => void;
  value?: number;
}

const StackOSInput = ({
  dropdownOptions,
  selected = 0,
  value,
  onChangeSelection = () => null,
  onChangeInput = () => null,
}: Props) => {
  const [selectedOption, setSelectedOption] = useState<Token>();

  useEffect(() => {
    setSelectedOption(dropdownOptions?.find((option: any) => option.id === selected));
  }, [dropdownOptions, selected]);

  return (
    <div className="relative shadow-sm">
      <div className="child:bg-[#374151] child:pl-3">
        <input
          type="number"
          name="price"
          id="price"
          className="block w-full h-full pr-12 pt-2 text-white text-base outline-0 rounded-t-md"
          placeholder="0.00"
          aria-describedby="price-currency"
          value={value}
          onChange={(e) => onChangeInput(Number(e.target.value))}
        />
        <div className="flex flex-row justify-start items-center w-full h-full pb-2 rounded-b-md">
          <span className="text-[#6B7280] text-base">-</span>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 pr-3 pt-2 flex items-start">
        <span className="text-[#6B7280] text-base" id="price-currency">
          {dropdownOptions?.length ? (
            <StackOSDropdown
              className="text-[#D1D5DB]"
              header="Select a Token"
              dropdownOptions={dropdownOptions}
              selected={selected}
              onChangeSelection={(option) => onChangeSelection(option)}
            >
              <span className="pr-2 text-[#6B7280]">{selectedOption?.title}</span>
            </StackOSDropdown>
          ) : (
            'STA'
          )}
        </span>
      </div>
    </div>
  );
};
{
  /* <div className="relative h-10 shadow-sm child:bg-[#374151] child:rounded-md">
  <div className="flex flex-row justify-start items-center w-full h-full pl-3">
    <span className="text-[#6B7280] text-base">-</span>
  </div>
</div> */
}

export default StackOSInput;
