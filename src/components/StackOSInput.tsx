/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import StackOSDropdown from './StackOSDropdown';
import StackOSIcon from './StackOSIcon';

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
  price?: number;
  disabled?: boolean;
  showPrice?: boolean;
}

const StackOSInput = ({
  dropdownOptions,
  selected = 0,
  value,
  price,
  disabled,
  showPrice,
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
          min="0"
          className={`block w-full h-full pr-12 text-white text-base outline-0 ${
            showPrice ? 'rounded-t-md pt-2' : 'rounded-md py-2'
          }`}
          placeholder="0.00"
          aria-describedby="price-currency"
          value={value}
          disabled={disabled}
          onChange={(e) => onChangeInput(Number(e.target.value))}
        />
        {showPrice && (
          <div className="flex flex-row justify-start items-center w-full h-full pb-2 rounded-b-md">
            <span className="text-[#6B7280] text-base">
              {price ? `~ $${price.toFixed(4)}` : '-'}
            </span>
          </div>
        )}
      </div>
      {showPrice && (
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
                {selectedOption && (
                  <StackOSIcon className="h-5 w-5 mr-2" iconName={selectedOption.icon} />
                )}
                <span className="pr-2 text-[#6B7280]">{selectedOption?.title}</span>
              </StackOSDropdown>
            ) : (
              <div className="flex flex-row justify-center items-center mr-2">
                <StackOSIcon className="h-5 w-5 mr-2" iconName="stackos" />
                <span>STACK</span>
              </div>
            )}
          </span>
        </div>
      )}
    </div>
  );
};

export default StackOSInput;
