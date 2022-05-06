/* eslint-disable import/extensions */
import { useTranslation } from 'react-i18next';
import { Card } from '@/components';
import LearnMore from './LoadMore';

const SectionTechnology = () => {
  const { t } = useTranslation();

  const title = 'Lorem Ipsum';
  const subtitle1 =
    'Stake a minimum amount of tokens to get extra voting power to govern the StackOS decentralized cloud.';
  const subtitle2 = 'Enjoy easy deployment on a decentralized, anonymous and secure cloud.';

  return (
    <div className="w-full flex flex-col justify-center items-center text-center py-20">
      <h2 className="text-[#F4F4F4] font-extrabold text-4xl lg:text-6xl mb-9">Developers</h2>
      <span className="text-white font-normal text-base max-w-md lg:max-w-lg 2xl:max-w-xl mb-3">
        StackOS is a cross-chain open protocol, connecting developers with decentralized compute
        power through a no-code, UI-based application deployment engine.
      </span>
      <LearnMore />
      <div className="flex flex-col justify-center items-center md:flex-row sm:child:mb-10">
        <Card src="/assets/home/lorem.svg" title={title} subtitle={subtitle1} />
        <Card src="/assets/home/ipsum.svg" title={title} subtitle={subtitle2} />
      </div>
    </div>
  );
};

export default SectionTechnology;
