import { Separator } from '@radix-ui/react-separator';
import { useTranslation } from 'react-i18next';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { faq } from './helpers';

const FaqSection = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full flex flex-col justify-center items-center text-center py-20">
      <h2 className="text-white font-extrabold text-6xl mb-16">
        {t('TOKEN_FAQ_TITLE1')}
        <p className="text-main-green">{t('TOKEN_FAQ_TITLE2')}</p>
      </h2>
      <div className="w-full text-left max-w-xl md:max-w-2xl lg:max-w-3xl">
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
      <div className="w-full text-left max-w-xl md:max-w-2xl lg:max-w-3xl mb-20">
        <Separator className="w-full h-px bg-[#4B5563]" />
        <div className="flex flex-row justify-between items-center mt-8 mb-3">
          <p className="text-white font-bold text-xl">{t('TOKEN_FAQ_QUESTION2')}</p>
          <BiChevronDown className="hover:cursor-pointer" color="#AAFF00" size={24} />
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
