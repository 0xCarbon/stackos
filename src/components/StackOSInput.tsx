/* eslint-disable no-unused-vars */
import { BiChevronDown, BiSearch } from 'react-icons/bi';
import StackOSIcon from './StackOSIcon';

interface Token {
  id: number;
  title: string;
  icon: string;
  subtitle?: string;
}

interface Props {
  onClickOption?: () => void;
  onChangeInput?: (value: any) => void;
  value?: any;
  price?: number | null;
  disabled?: boolean;
  showPrice?: boolean;
  optionSelected?: Token;
  type: string;
  placeholder?: string;
  iconLeft?: boolean;
  fontSize?: number;
}

const StackOSInput = ({
  value,
  price,
  disabled,
  showPrice,
  optionSelected,
  type = 'number',
  placeholder = '0.00',
  iconLeft,
  onClickOption = () => null,
  onChangeInput = () => null,
  fontSize = 24,
}: Props) => (
  <div className="relative shadow-sm">
    {iconLeft && (
      <div className="absolute inset-y-0 left-0 pl-2 pt-[10px] flex items-start text-[#6B7280]">
        <BiSearch />
      </div>
    )}
    <div className={`child:bg-[#374151] ${iconLeft ? 'child:pl-8' : 'child:pl-3'}`}>
      <input
        type={type}
        name="price"
        id="price"
        min="0"
        step="any"
        style={{ fontSize: `${fontSize}px` }}
        className={`block w-full h-full pr-12 text-white text-2xl font-normal outline-0 ${
          showPrice ? 'rounded-t-md pt-2' : 'rounded-md py-2'
        } ${disabled && 'cursor-not-allowed'}`}
        placeholder={placeholder}
        aria-describedby="price-currency"
        value={value}
        disabled={disabled}
        onChange={(e) => onChangeInput(e.target.value)}
      />
      {showPrice && (
        <div className="flex flex-row justify-start items-center w-full h-full pb-2 rounded-b-md">
          <span className="text-[#6B7280] text-base">{price ? `~ $${price.toFixed(4)}` : '-'}</span>
        </div>
      )}
    </div>
    {showPrice && (
      <div className="absolute inset-y-0 right-0 pr-3 pt-2 flex items-start">
        <span className="text-[#6B7280] text-base" id="price-currency">
          {optionSelected?.id ? (
            <div
              className="text-[#D1D5DB] flex flex-row justify-center items-center hover:cursor-pointer"
              onClick={() => onClickOption()}
            >
              <StackOSIcon className="h-5 w-5 mr-2" iconName={optionSelected.icon} />
              <span className="pr-2 text-[#6B7280]">{optionSelected?.title}</span>
              <BiChevronDown className="h-5 w-5" aria-hidden="true" />
            </div>
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

export default StackOSInput;
