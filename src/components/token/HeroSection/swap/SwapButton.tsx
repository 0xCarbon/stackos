import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  disabled?: boolean;
  className?: string;
};

const SwapButton = ({ children, disabled, className }: Props) => (
  <button
    type="button"
    className={`${className} font-medium bg-main-green text-main-blue text-sm rounded-md px-10 py-3 duration-300 border ${
      disabled
        ? 'bg-transparent border-[#6B7280] text-[#6B7280]'
        : 'hover:bg-[#99e448] border-main-green'
    }`}
    disabled={disabled}
  >
    {children}
  </button>
);

export default SwapButton;
