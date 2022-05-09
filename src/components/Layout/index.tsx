import { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => (
  <div className="overflow-hidden h-full w-full m-0 flex flex-col bg-main-blue">
    <div className="w-full max-w-screen-2xl mx-auto">
      <Header />
      {children}
      <Footer />
    </div>
  </div>
);

export default Layout;
