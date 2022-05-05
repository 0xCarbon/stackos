import { Separator } from '@radix-ui/react-separator';
import { BiLinkExternal } from 'react-icons/bi';

const SectionGovernance = () => (
  <div className="flex flex-col justify-start mx-5 py-20">
    <div className="flex flex-row justify-start items-center mb-9">
      <Separator className="h-9 w-[5px] lg:w-2 lg:h-14 2xl:w-[10px] 2xl:h-16 bg-main-green" />
      <h2 className="text-[#D9D9D9] font-extrabold text-4xl lg:text-6xl mx-5">Governance</h2>
    </div>
    <span className="text-white font-normal text-base lg:text-xl max-w-xl lg:max-w-2xl 2xl:max-w-3xl mb-3">
      StackOS is a cross-chain open protocol, connecting developers with decentralized compute power
      through a no-code, UI-based application deployment engine.
    </span>
    <div className="text-main-green flex flex-col justify-start hover:cursor-pointer mb-14">
      <div className="flex flex-row justify-start items-center mb-1 text-sm lg:text-lg 2xl:text-xl">
        <BiLinkExternal color="#AAFF00" />
        <span className="mx-3">Learn more</span>
      </div>
      <Separator className="w-[100px] lg:w-[132px] 2xl:w-[160px] h-px bg-main-green" />
    </div>
  </div>
);

export default SectionGovernance;
