import { useTranslation } from 'react-i18next';
import { BiGlobe } from 'react-icons/bi';
import features from '../helpers';

type Props = {
  sliceStart?: number;
  sliceEnd?: number;
};

const Features = ({ sliceStart, sliceEnd }: Props) => {
  const { t } = useTranslation();

  const filteredFeatures = sliceStart || sliceEnd ? features.slice(sliceStart, sliceEnd) : features;

  return (
    <div>
      {filteredFeatures.map((item) => (
        <div
          key={item.id}
          className="flex flex-row justify-center w-full items-start mb-11 last:mb-0"
        >
          <div className="flex flex-col bg-main-green rounded-md w-12 h-12 items-center justify-center mr-4">
            <BiGlobe className="text-lg" color="#111827" />
          </div>
          <div className="flex flex-col justify-start items-start w-full">
            <span className="text-[#F9FAFB] font-medium text-lg">{t(item.title)}</span>
            <span className="text-[#F9FAFB] font-normal text-base text-left">
              {t(item.subtitle)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

Features.defaultProps = {
  sliceStart: null,
  sliceEnd: null,
};

export default Features;
