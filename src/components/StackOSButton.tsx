import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  disabled?: boolean;
  className?: string;
};

const StackOSButton = ({ children, disabled, className }: Props) => (
  <button
    type="button"
    className={`${className} font-semibold bg-main-green text-main-blue lg:text-lg rounded-md px-9 py-3 lg:px-10 lg:py-4 duration-300 ${
      disabled ? 'bg-transparent border border-[#6B7280] text-[#6B7280]' : 'hover:bg-[#99e448]'
    }`}
    disabled={disabled}
  >
    {children}
  </button>
);

export default StackOSButton;
