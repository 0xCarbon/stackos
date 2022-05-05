import { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => (
  <div className="h-full w-full m-0 flex flex-col bg-main-blue">
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
