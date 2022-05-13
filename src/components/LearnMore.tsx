import { BiLinkExternal } from 'react-icons/bi';
import { Separator } from '@radix-ui/react-separator';
import { useTranslation } from 'react-i18next';

const LearnMore = () => {
  const { t } = useTranslation();

  return (
    <div className="text-main-green flex flex-col justify-start hover:cursor-pointer duration-500">
      <div className="flex flex-row items-end mb-2 duration-500">
        <BiLinkExternal className="duration-500 text-xl lg:text-3xl" color="#AAFF00" />
        <p className="mx-2 font-normal text-sm lg:text-xl duration-500">
          {t('HOME_LEARN_MORE_BUTTON')}
        </p>
      </div>
      <Separator className="ml-[0.1rem] w-[6.35rem] lg:w-[8.95rem] h-px bg-main-green duration-700" />
    </div>
  );
};

export default LearnMore;
