import React from 'react';
import Image from 'next/image';

interface Props {
  iconName: string;
  className?: string;
}

const StackOSIcon: React.FC<Props> = ({ iconName, className }) => {
  const iconPath = `/assets/${iconName}.svg`;

  return (
    <div className={className}>
      <Image src={iconPath} alt={iconName} width={24} height={24} />
    </div>
  );
};

StackOSIcon.defaultProps = {
  className: '',
};

export default StackOSIcon;
