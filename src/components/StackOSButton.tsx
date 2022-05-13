import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const StackOSButton = ({ children }: Props) => (
  <button
    type="button"
    className="bg-main-green text-main-blue lg:text-lg rounded-md px-9 py-3 lg:px-10 lg:py-4"
  >
    {children}
  </button>
);

export default StackOSButton;
