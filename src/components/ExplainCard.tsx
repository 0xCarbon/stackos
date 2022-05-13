import React from 'react';
import { HiOutlineAnnotation, HiOutlineLightningBolt } from 'react-icons/hi';
import { BiGlobe, BiBlock } from 'react-icons/bi';
import { Trans } from 'react-i18next';

interface Props {
  iconName: string;
  description: string;
}

const ExplainCard: React.FC<Props> = ({ iconName, description }) => {
  let icon;
  switch (iconName) {
    case 'annotation':
      icon = (
        <HiOutlineAnnotation
          className="duration-500 text-[2rem] lg:text-[2.4rem]"
          color="#111827"
        />
      );
      break;

    case 'globe':
      icon = <BiGlobe className="duration-500 text-[2rem] lg:text-[2.4rem]" color="#111827" />;
      break;

    case 'bolt':
      icon = (
        <HiOutlineLightningBolt
          className="duration-500 text-[2rem] lg:text-[2.4rem]"
          color="#111827"
        />
      );
      break;

    default:
      icon = <BiBlock className="duration-500 text-[2rem] lg:text-[2.4rem]" color="#111827" />;
      break;
  }

  return (
    <div className="flex flex-row items-center duration-500">
      <div className="flex bg-main-green rounded-md min-w-[3.5rem] h-14 md:min-w-[4rem] md:h-16 lg:min-w-[5.4rem] lg:h-[5.4rem] items-center justify-center mr-5 duration-500">
        {icon}
      </div>
      <p className="text-white xl:text-xl w-auto duration-500">
        <Trans>{description}</Trans>
      </p>
    </div>
  );
};

export default ExplainCard;
