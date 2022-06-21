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
      <div className="lg:mt-56 px-5 md:px-0 max-w-[23rem] sm:max-w-[33.75rem] md:max-w-[45rem] lg:max-w-[60rem] xl:max-w-[71.25rem] mx-auto duration-500">
        {children}
      </div>
      <Footer />
    </div>
  </div>
);

export default Layout;
