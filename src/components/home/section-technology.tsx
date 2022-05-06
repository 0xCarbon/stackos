import { Separator } from '@radix-ui/react-separator';
import LearnMore from './LearnMore';

const SectionTechnology = () => (
  <div className="flex flex-col justify-end items-end px-5 py-20">
    <div className="flex flex-row justify-end items-center mb-9 child:duration-500">
      <div className="justify-end flex flex-col space-y-3">
        <h3 className="text-[#D9D9D9] font-light text-sm lg:text-4xl mx-5 text-right">
          A DECENTRALIZED CLOUD
        </h3>
        <h2 className="text-[#D9D9D9] font-extrabold text-4xl lg:text-6xl mx-5 text-right">
          Technology
        </h2>
      </div>
      <Separator className="h-10 lg:h-14 w-[0.4rem] lg:w-2 xl:w-2 2xl:w-[0.45rem] bg-main-green" />
    </div>
    <p className="text-white font-normal text-base text-right mb-3 lg:mb-6 2xl:mb-10 lg:text-xl max-w-xl lg:max-w-2xl 2xl:max-w-3xl duration-500 ">
      StackOS is a blockchain protocol, a platform connecting developers with a decentralized
      network of compute power. Use the simplicity of a no-code, UI-based deployment engine or the
      power of shell access to the underling Kubernetes clusters.
    </p>
    <LearnMore />
  </div>
);

export default SectionTechnology;
