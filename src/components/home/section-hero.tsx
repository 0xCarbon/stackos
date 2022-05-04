import { Separator } from '@radix-ui/react-separator';
import Image from 'next/image';

const SectionHero = () => (
  <div className="flex text-white">
    {/* left section */}
    <div className="flex flex-col">
      <h1 className="text-[40px]">
        Just
        <span className="text-main-green">deploy.</span>
      </h1>
      <span>No-Code and No-Signup cloud. Decentralized. Hassle-free. Enterprise Grade.</span>
      <div>
        <button type="button">Deploy Now</button>
        <button type="button">Buy $STACK</button>
      </div>
      <div>
        <Separator />
        <span>+1,4k</span>
        <span>Deployed Apps</span>
        <Separator />
        <span>+40M</span>
        <span>Pages served</span>
      </div>
    </div>
    {/* images section */}
    <div className="h-[100%] w-[100%]">
      <Image src="/assets/hero-section/hero-backgroung.svg" layout="fill" objectFit="contain" />
    </div>
  </div>
);

export default SectionHero;
