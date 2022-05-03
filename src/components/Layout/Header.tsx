import Link from 'next/link';

const Header = () => (
  <header>
    <div className="text-white flex flex-row justify-center items-center px-24 py-16 child:flex-1">
      <Link href="/technology">Technology</Link>
      <Link href="/developers">Developers</Link>
      <Link href="/governance">Governance</Link>
      <Link href="/partners">Partners</Link>
      <Link href="/token">Token</Link>
    </div>
  </header>
);

export default Header;
