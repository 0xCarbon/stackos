import { Separator } from '@radix-ui/react-separator';

const SectionHero = () => (
  <div className="flex text-white relative p-[1.2rem] lg:p-[1.5rem] 2xl:p-[80px] mt-[50px] lg:mt-[150px] 2xl:mt-[170px]">
    {/* left section */}
    <div className="flex flex-col">
      <div>
        <h1 className=" leading-none text-[2rem] lg:text-[4rem] font-extrabold">
          Just
          <br />
          <span className="text-main-green font-extrabold"> deploy.</span>
        </h1>
      </div>
      <span className="text-[1rem] lg:text-[1.5rem] font-normal mt-[2rem] mb-[1.5rem] lg:mb-[2.6rem]">
        No-Code and No-Signup cloud.
        <br />
        Decentralized. Hassle-free. Enterprise Grade.
      </span>
      <div className="flex space-x-[1.5rem]">
        <button
          type="button"
          className="bg-main-green text-main-blue lg:text-[1.3rem] rounded-[0.4rem] px-[2.3rem] lg:px-[3rem] py-[0.9rem] lg:py-[1.3rem]"
        >
          Deploy Now
        </button>
        <button
          type="button"
          className="bg-main-green text-main-blue lg:text-[1.3rem] rounded-[0.4rem] px-[2.3rem] lg:px-[3rem] py-[0.9rem] lg:py-[1.3rem]"
        >
          Buy $STACK
        </button>
      </div>
      <div className="flex mt-[4rem] 2xl:mt-[160px]">
        <Separator className="w-[3px] bg-main-green mr-[2rem]" />
        <div className="flex flex-col">
          <span className="font-semibold text-[2rem] lg:text-[2.5rem] lg:font-normal">+1,4k</span>
          <span className="font-light text-[1rem] lg:text-[1.5rem]">Deployed Apps</span>
        </div>
        <Separator className="w-[3px] bg-main-green mr-[2rem] ml-[3rem]" />
        <div className="flex flex-col">
          <span className="font-semibold text-[2rem] lg:text-[2.5rem] lg:font-normal">+40M</span>
          <span className="font-light text-[1rem] lg:text-[1.5rem]">Pages served</span>
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