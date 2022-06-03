import React from 'react';
import Image from 'next/image';

interface Props {
  iconName: string;
  className?: string;
  width?: number;
  height?: number;
}

const StackOSIcon: React.FC<Props> = ({ iconName, className, width = 24, height = 24 }) => {
  const iconPath = `/assets/${iconName}.svg`;

  return (
    <div className={className}>
      <Image src={iconPath} alt={iconName} width={width} height={height} />
    </div>
  );
};

StackOSIcon.defaultProps = {
  className: '',
};

export default StackOSIcon;
