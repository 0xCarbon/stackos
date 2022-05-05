import { Separator } from '@radix-ui/react-separator';
import { BiLinkExternal } from 'react-icons/bi';

const SectionTechnology = () => (
  <div className="text-white justify-end flex flex-col p-[1.2rem] lg:p-[1.5rem] 2xl:p-[80px]">
    <div className="flex justify-end">
      <div className="flex flex-col">
        <span className="text-[1.2rem] font-light">A DECENTRALIZED CLOUD</span>
        <span className="text-[3rem] font-extrabold">Technology</span>
      </div>
      <Separator className="w-[6px] bg-main-green ml-[1.5rem]" />
    </div>
    <div className="flex justify-end">
      <span className="text-[1.2rem] max-w-lg font-normal mt-[3rem] mb-[1.2rem] text-right">
        StackOS is a blockchain protocol, a platform connecting developers with a decentralized
        network of compute power. Use the simplicity of a no-code, UI-based deployment engine or the
        power of shell access to the underling Kubernetes clusters.
      </span>
    </div>
    <div className="text-main-green flex flex-col justify-end items-end hover:cursor-pointer mb-14">
      <div className="flex flex-row justify-end items-center mb-1">
        <BiLinkExternal color="#AAFF00" size="14px" />
        <span className="ml-3">Learn more</span>
      </div>
      <Separator className="w-28 h-px bg-main-green" />
    </div>
  </div>
);

export default SectionTechnology;
