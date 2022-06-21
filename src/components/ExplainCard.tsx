import React from 'react';
import { HiOutlineAnnotation, HiOutlineLightningBolt } from 'react-icons/hi';
import { BiGlobe, BiBlock } from 'react-icons/bi';
import { Trans } from 'react-i18next';
import { FaDocker } from 'react-icons/fa';
import { IoMdRocket } from 'react-icons/io';
import { MdMoneyOff } from 'react-icons/md';
import { GoGistSecret, GoGraph } from 'react-icons/go';
import { RiComputerLine } from 'react-icons/ri';

interface Props {
  iconName?: keyof Icons;
  description: string;
}

export interface Icons {
  annotation: React.ReactElement;
  globe: React.ReactElement;
  bolt: React.ReactElement;
  default: React.ReactElement;
  rocket: React.ReactElement;
  monitor: React.ReactElement;
  graphs: React.ReactElement;
  docker: React.ReactElement;
  money: React.ReactElement;
  anonymous: React.ReactElement;
}

const ExplainCard: React.FC<Props> = ({ iconName = 'default', description }) => {
  const icons: Icons = {
    annotation: (
      <HiOutlineAnnotation className="duration-500 text-[2rem] lg:text-[2.4rem] text-[#111827]" />
    ),
    globe: <BiGlobe className="duration-500 text-[2rem] lg:text-[2.4rem] text-[#111827]" />,
    bolt: (
      <HiOutlineLightningBolt className="duration-500 text-[2rem] lg:text-[2.4rem] text-[#111827]" />
    ),
    rocket: <IoMdRocket className="duration-500 text-[2rem] lg:text-[2.4rem] text-[#111827]" />,
    monitor: (
      <RiComputerLine className="duration-500 text-[2rem] lg:text-[2.4rem] text-[#111827]" />
    ),
    graphs: <GoGraph className="duration-500 text-[2rem] lg:text-[2.4rem] text-[#111827]" />,
    docker: <FaDocker className="duration-500 text-[2rem] lg:text-[2.4rem] text-[#111827]" />,
    money: <MdMoneyOff className="duration-500 text-[2rem] lg:text-[2.4rem] text-[#111827]" />,
    anonymous: (
      <GoGistSecret className="duration-500 text-[2rem] lg:text-[2.4rem] text-[#111827]" />
    ),
    default: <BiBlock className="duration-500 text-[2rem] lg:text-[2.4rem] text-[#111827]" />,
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
