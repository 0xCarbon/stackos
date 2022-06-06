import { Separator } from '@radix-ui/react-separator';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { faq } from './helpers';

const FaqSection = ({ offsetY }: { offsetY: number }) => {
  const { t } = useTranslation();

  return (
    <div className="relative w-full flex flex-col justify-center items-center text-center py-20">
      <h2 className="z-50 text-white font-extrabold text-6xl mb-16">
        {t('TOKEN_FAQ_TITLE1')}
        <p className="text-main-green">{t('TOKEN_FAQ_TITLE2')}</p>
      </h2>
      <div className="z-50 w-full text-left max-w-xl md:max-w-2xl lg:max-w-3xl">
        <Separator className="w-full h-px bg-[#4B5563]" />
        <div className="flex flex-row justify-between items-center mt-8 mb-3">
          <p className="text-white font-bold text-xl">{t('TOKEN_FAQ_QUESTION1')}</p>
          <BiChevronUp className="hover:cursor-pointer" color="#AAFF00" size={24} />
        </div>
        <div className="mb-2">
          {faq.map((item) => (
            <span
              key={item.id}
              className="even:text-main-green even:underline text-white font-normal text-base"
            >
              {t(item.title)}
            </span>
          ))}
        </div>
      </div>
      <div className="z-50 w-full text-left max-w-xl md:max-w-2xl lg:max-w-3xl mb-20">
        <Separator className="w-full h-px bg-[#4B5563]" />
        <div className="flex flex-row justify-between items-center mt-8 mb-3">
          <p className="text-white font-bold text-xl">{t('TOKEN_FAQ_QUESTION2')}</p>
          <BiChevronDown className="hover:cursor-pointer" color="#AAFF00" size={24} />
        </div>
      </div>
      <div
        style={{ transform: `translate(${offsetY * 0.05}px, ${offsetY * 0.1}px)` }}
        className="absolute w-[18rem] h-[18rem] left-[-15rem] top-0 sm:left-[-18rem] md:left-[-13rem] xl:left-[-8rem] duration-500"
      >
        <Image src="/assets/token/faq-layer1.svg" alt="background image" layout="fill" priority />
      </div>
      <div
        style={{ transform: `translate(-${offsetY * 0.06}px, ${offsetY * 0.06}px)` }}
        className="absolute w-[34rem] h-[28rem] left-[-28rem] top-[-5rem] md:left-[-23rem] duration-500"
      >
        <Image src="/assets/token/faq-layer2.svg" alt="background image" layout="fill" priority />
      </div>
      <div
        style={{ transform: `translate(${offsetY * 0.01}px, ${offsetY * 0.01}px)` }}
        className="absolute w-[22rem] h-[17rem] left-[-15rem] top-[-15rem] duration-500"
      >
        <Image src="/assets/token/faq-layer3.svg" alt="background image" layout="fill" priority />
      </div>
      <div
        style={{ transform: `translate(${offsetY * 0.1}px, ${offsetY * 0.1}px)` }}
        className="hidden lg:inline absolute w-[11rem] h-[21rem] right-[-6rem] top-[3rem] duration-500"
      >
        <Image src="/assets/token/faq-layer4.svg" alt="background image" layout="fill" priority />
      </div>
    </div>
  );
};

export default FaqSection;
