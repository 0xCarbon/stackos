import { Separator } from '@radix-ui/react-separator';

const SectionHero = () => (
  <div className="flex text-white relative p-[16px] lg:p-[30px] 2xl:p-[80px] mt-[50px] lg:mt-[150px] 2xl:mt-[170px]">
    {/* left section */}
    <div className="flex flex-col">
      <div className="leading-none">
        <h1 className="text-[40px] lg:text-[60px] font-extrabold">
          Just
          <br />
          <span className="text-main-green font-extrabold"> deploy.</span>
        </h1>
      </div>
      <span className="text-[16px] font-normal mt-[40px] mb-[30px]">
        No-Code and No-Signup cloud.
        <br />
        Decentralized. Hassle-free. Enterprise Grade.
      </span>
      <div className="flex space-x-[24px]">
        <button
          type="button"
          className="bg-main-green text-main-blue rounded-[6px] px-[34.5px] lg:px-[41px] py-[11px] lg:py-[17px]"
        >
          Deploy Now
        </button>
        <button
          type="button"
          className="bg-main-green text-main-blue rounded-[6px] px-[34.5px] lg:px-[41px] py-[11px] lg:py-[17px]"
        >
          Buy $STACK
        </button>
      </div>
      <div className="flex mt-[50px] 2xl:mt-[160px]">
        <Separator className="w-[3px] bg-main-green mr-[30px]" />
        <div className="flex flex-col">
          <span className="font-semibold text-[32px] lg:text-[36px]">+1,4k</span>
          <span className="font-light text-[16px] lg:text-[20px]">Deployed Apps</span>
        </div>
        <Separator className="w-[3px] bg-main-green mr-[30px] ml-[50px]" />
        <div className="flex flex-col">
          <span className="font-semibold text-[32px] lg:text-[36px]">+40M</span>
          <span className="font-light text-[16px] lg:text-[20px]">Pages served</span>
        </div>
      </div>
    </div>
    {/* images section */}
    {/* <div className="w-[100%] h-[300%] right-[-19%] top-[-100%] absolute">
      <Image src="/assets/hero-background.svg" layout="fill" />
    </div> */}
  </div>
);

export default SectionHero;
