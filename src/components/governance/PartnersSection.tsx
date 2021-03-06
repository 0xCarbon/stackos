import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import partners from './helpers';

const PartnersSection = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className="leading-normal text-[2.5rem] xl:text-[3.5rem] text-white font-extrabold mb-10">
        {t('GOVERNANCE_BACKING_US')}
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-5 mb-10">
        {partners.map((item) => (
          <div
            key={item.img}
            className="relative flex flex-col justify-center items-center my-4 mx-5"
          >
            <div className=" relative w-36 h-32 lg:h-40 lg:w-40">
              <Image alt={item.title} src={item.img} layout="fill" objectFit="contain" />
            </div>
            <p className="hidden lg:inline text-white">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnersSection;
