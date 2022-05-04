/* eslint-disable import/extensions */
import { BiLinkExternal } from 'react-icons/bi';
import { Separator } from '@radix-ui/react-separator';
import lorem from '@/assets/home/lorem.svg';
import ipsum from '@/assets/home/ipsum.svg';
import { Card } from '@/components';

const SectionTechnology = () => {
  const title = 'Lorem Ipsum';
  const subtitle1 =
    'Stake a minimum amount of tokens to get extra voting power to govern the StackOS decentralized cloud.';
  const subtitle2 = 'Enjoy easy deployment on a decentralized, anonymous and secure cloud.';

  return (
    <div className="w-full flex flex-col justify-center items-center text-center py-20">
      <h2 className="text-[#F4F4F4] font-extrabold text-4xl lg:text-6xl xl:text-6xl 2xl:text-6xl mb-9">
        Developers
      </h2>
      <span className="text-white font-normal text-base sm:max-w-md md:max-w-md lg:max-w-lg xl:max-w-lg 2xl:max-w-xl mb-3">
        StackOS is a cross-chain open protocol, connecting developers with decentralized compute
        power through a no-code, UI-based application deployment engine.
      </span>
      <div className="text-main-green flex flex-col justify-center items-center hover:cursor-pointer mb-14">
        <div className="flex flex-row justify-center items-center mb-1">
          <BiLinkExternal color="#AAFF00" size="14px" />
          <span className="ml-3">Learn more</span>
        </div>
        <Separator className="w-28 h-px bg-main-green" />
      </div>
      <div className="flex flex-row justify-center items-center sm:flex-col sm:child:mb-10">
        <Card src={lorem} title={title} subtitle={subtitle1} />
        <Card src={ipsum} title={title} subtitle={subtitle2} />
      </div>
    </div>
  );
};

export default SectionTechnology;
