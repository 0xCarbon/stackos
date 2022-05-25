import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => (
  <div className="overflow-hidden h-full w-full m-0 flex flex-col bg-main-blue z-0">
    <div className="w-full mx-auto">
      <Header />
      <div className="px-5 sm:px-[3.125rem] md:px-[2.125rem] lg:px-[2.5rem] xl:px-20 max-w-[17.5rem] sm:max-w-[33.75rem] md:max-w-[45rem] lg:max-w-[60rem] xl:max-w-[71.25rem] mx-auto">
        {children}
      </div>
      <Footer />
    </div>
  </div>
);

export default Layout;
