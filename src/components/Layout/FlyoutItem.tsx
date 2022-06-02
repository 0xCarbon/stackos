import React from 'react';
import { FaDiscord } from 'react-icons/fa';
import { BiBlock } from 'react-icons/bi';
import { GrAppsRounded } from 'react-icons/gr';
import { MdOutlineTextSnippet } from 'react-icons/md';

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
    whitepaper: <MdOutlineTextSnippet />,
    ambassador: <GrAppsRounded />,
  };

  const icon = icons[iconName];

  return (
    <a
      key={name}
      href={href}
      className="flex -m-3 p-3 text-4xl rounded-md text-white bg-dark-grey hover:bg-light-grey transition ease-in-out duration-150"
    >
      {icon}
      <div className="ml-5">
        <p className="text-base font-medium text-white">{name}</p>
        <p className="mt-1 text-sm font-normal text-dark-white">{description}</p>
      </div>
    </a>
  );
};

export default FlyoutItem;
