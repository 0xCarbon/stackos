import React from 'react';
import { HiOutlineAnnotation, HiOutlineLightningBolt } from 'react-icons/hi';
import { BiGlobe, BiBlock } from 'react-icons/bi';

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
    <div className="flex flex-row mb-12 lg:mb-16 2xl:mb-20 mr-8 md:mr-14 2xl:mr-24 items-center duration-500">
      <div className="flex bg-main-green rounded-md w-14 h-14 md:w-16 md:h-16 lg:w-[5.4rem] lg:h-[5.4rem] items-center justify-center mr-5 duration-500">
        {icon}
      </div>
      <p className="text-white w-[10rem] lg:w-[14.75rem] duration-500">{description}</p>
    </div>
  );
};

export default ExplainCard;
