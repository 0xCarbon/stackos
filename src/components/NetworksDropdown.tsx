/* eslint-disable no-unused-vars */
import { ReactNode, useEffect, useState } from 'react';
import { Chain, useAccount, useConnect, useNetwork } from 'wagmi';
import { Dropdown, StackOSIcon } from '@/components';

interface Network extends Chain {
  title: string;
  icon?: string;
  subtitle?: string;
}

interface Props {
  className?: string;
  header?: string;
  onChangeSelection?: (value: number) => void;
}

const NetworksDropdown = ({ header, className, onChangeSelection }: Props) => {
  const { data: account } = useAccount();
  const { connect, connectors } = useConnect();
  const { activeChain, chains, switchNetwork } = useNetwork();

  const metamask = connectors[0];
  const ETHEREUM = 1;
  const BSC = 56;
  const POLYGON = 137;
  const ethereumChain = chains.find((chain) => chain.id === ETHEREUM);
  const binanceChain = chains.find((chain) => chain.id === BSC);
  const polygonChain = chains.find((chain) => chain.id === POLYGON);

  const networkOptions = [
    { title: 'Ethereum', subtitle: 'Uniswap (v2)', icon: 'uniswap', ...ethereumChain },
    { title: 'Polygon', subtitle: 'Dfyn', icon: 'dfyn', ...polygonChain },
    { title: 'BSC', subtitle: 'PancakeSwap (v2)', icon: 'pancakeswap', ...binanceChain },
  ];

  const [networkSelected, setNetworkSelected] = useState<Network>();

  useEffect(() => {
    setupNetwork();
  }, [activeChain]);

  function onChangeNetwork(value: number) {
    if (!activeChain) {
      connect(metamask);
    }

    switchNetwork?.(value);
  }

  function setupNetwork() {
    if (activeChain && activeChain?.id !== networkSelected?.id) {
      setNetworkSelected(networkOptions.find((option) => option.id === activeChain?.id) as Network);
      if (!account) {
        connect(connectors.find((connector) => connector.id === 'metaMask'));
      }
    }
  }

  return (
    <Dropdown
      className="ml-1 w-44 h-10 bg-main-green flex flex-row justify-center items-center rounded-md"
      header="Select a network"
      selected={networkSelected?.id || 1}
      dropdownOptions={networkOptions}
      onChangeSelection={(value) => onChangeNetwork(value)}
    >
      {account && networkSelected?.icon && (
        <StackOSIcon className="h-6 w-6" iconName={networkSelected.icon} />
      )}
      <span className="text-[#111827] font-bold text-base ml-2 mr-3">
        {account && networkSelected ? networkSelected.title : header}
      </span>
    </Dropdown>
  );
};

export default NetworksDropdown;
