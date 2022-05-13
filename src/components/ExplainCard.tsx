import React from 'react';
import { HiOutlineAnnotation, HiOutlineLightningBolt } from 'react-icons/hi';
import { BiGlobe, BiBlock } from 'react-icons/bi';
import { Trans } from 'react-i18next';

interface Props {
  iconName?: keyof Icons;
  description: string;
}

interface Icons {
  annotation: React.ReactElement;
  globe: React.ReactElement;
  bolt: React.ReactElement;
  default: React.ReactElement;
}

const ExplainCard: React.FC<Props> = ({ iconName = 'default', description }) => {
  const icons: Icons = {
    annotation: (
      <HiOutlineAnnotation className="duration-500 text-[2rem] lg:text-[2.4rem]" color="#111827" />
    ),
    globe: <BiGlobe className="duration-500 text-[2rem] lg:text-[2.4rem]" color="#111827" />,
    bolt: (
      <HiOutlineLightningBolt
        className="duration-500 text-[2rem] lg:text-[2.4rem]"
        color="#111827"
      />
    ),
    default: <BiBlock className="duration-500 text-[2rem] lg:text-[2.4rem]" color="#111827" />,
  };

  const icon = icons[iconName];

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

ExplainCard.defaultProps = { iconName: 'default' };

export default ExplainCard;
