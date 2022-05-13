import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => (
  <div className="overflow-hidden h-full w-full m-0 flex flex-col bg-main-blue z-0">
    <div className="w-full max-w-screen-2xl mx-auto">
      <Header />
      <div className="px-5 md:px-7 lg:px-10 2xl:px-20">{children}</div>
      <Footer />
    </div>
  </div>
);

export default Layout;
