import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { Separator } from '@radix-ui/react-separator';
import { LearnMore } from '@/components';

const GovernanceSection = () => {
  const { t } = useTranslation();

  return (
    <div className="relative flex flex-col justify-start py-16">
      <div className="z-10">
        <div className="flex flex-row justify-start items-center mb-9">
          <Separator className="h-9 w-[5px] lg:w-2 lg:h-14 2xl:w-[10px] 2xl:h-16 bg-main-green" />
          <h2 className="text-[#D9D9D9] font-extrabold text-4xl lg:text-6xl mx-5">
            {t('HOME_GOVERNANCE_TITLE')}
          </h2>
        </div>
        <span className="text-white font-normal text-base lg:text-xl max-w-lg lg:max-w-xl mb-3 lg:mb-5">
          {t('HOME_GOVERNANCE_DESCRIPTION')}
        </span>
        <LearnMore />
      </div>
      <div className="md:hidden absolute w-[22.75rem] h-[24.75rem] right-[-20rem] top-[9rem] duration-500">
        <Image
          src="/assets/home/governance-background1-sm.svg"
          alt="technology background"
          layout="fill"
        />
      </div>
      <div className="hidden md:inline absolute w-[57.9rem] lg:w-[120rem] h-[24.75rem] lg:h-[52rem] right-[-18rem] top-[4rem] duration-500">
        <Image
          src="/assets/home/governance-background1-md.svg"
          alt="technology background"
          layout="fill"
        />
      </div>
      <div className="hidden lg:inline absolute w-[27rem] h-[16rem] right-[6rem] top-[25rem] duration-500">
        <Image
          src="/assets/home/governance-background2-lg.svg"
          alt="technology background"
          layout="fill"
        />
      </div>
    </div>
  );
};

export default GovernanceSection;
