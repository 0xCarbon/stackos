import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  disabled?: boolean;
};

const StackOSButton = ({ children, disabled }: Props) => (
  <button
    type="button"
    className={`font-semibold bg-main-green text-main-blue lg:text-lg rounded-md px-9 py-3 lg:px-10 lg:py-4 hover:bg-[#99e448] duration-300 ${
      disabled && 'bg-transparent border border-[#6B7280] text-[#6B7280]'
    }`}
    disabled={disabled}
  >
    {children}
  </button>
);

export default StackOSButton;
