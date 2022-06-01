import React from 'react';
import { FaDiscord } from 'react-icons/fa';
import { BiBlock } from 'react-icons/bi';
import { GrAppsRounded } from 'react-icons/gr';
import Image from 'next/image';

export interface Icons {
  discord: React.ReactElement;
  communities: React.ReactElement;
  whitepaper: React.ReactElement;
  ambassador: React.ReactElement;
}

interface Props {
  iconName: keyof Icons;
  name: string;
  description: string;
  href: string;
}

const FlyoutItem = ({ iconName, name, description, href }: Props) => {
  const icons: Icons = {
    discord: <FaDiscord />,
    communities: <BiBlock />,
    whitepaper: <Image src="/assets/layout/whitepaper.svg" width={17} height={23} />,
    ambassador: <GrAppsRounded />,
  };

  const icon = icons[iconName];

  return (
    <a
      key={name}
      href={href}
      className="flex -m-3 p-3 text-6xl rounded-md text-black bg-dark-grey hover:bg-light-grey transition ease-in-out duration-150"
    >
      {icon}
      <div>
        <p className="text-base font-medium text-gray-900">{name}</p>
        <p className="mt-1 text-sm text-gray-500">{description}</p>
      </div>
    </a>
  );
};

export default FlyoutItem;
