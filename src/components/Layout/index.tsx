import { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => (
  <body className="h-screen w-full m-0 flex flex-col bg-main-blue">
    <Header />
    {children}
    <Footer />
  </body>
);

export default Layout;
