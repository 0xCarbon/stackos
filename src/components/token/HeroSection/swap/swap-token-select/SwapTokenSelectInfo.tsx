import { useSelector } from 'src/redux/hooks';
import { useAccount, useBalance } from 'wagmi';
import { useState } from 'react';
import { StackOSIcon } from '@/components';

interface Props {
  token: any;
}

const SwapTokenSelectInfo = ({ token }: Props) => {
  const { general } = useSelector((state) => state);
  const { tokenSelected } = general;
  const [tokenBalance, setTokenBalance] = useState(0);

  const { data: account } = useAccount();

  useBalance({
    addressOrName: account?.address,
    token: token?.id === 1 ? null : token?.address,
    chainId: token?.chainId,
    onSuccess(data) {
      setTokenBalance(Number(data?.formatted));
    },
  });

  return (
    <>
      <div className="flex flex-row justify-center items-center">
        <StackOSIcon className="mr-3 flex items-center" iconName={token.icon} />
        <div className="flex flex-col justify-start">
          <span className="font-semibold">{token.title}</span>
          <span className={`${tokenSelected?.id === token.id && 'text-[#2D3948]'} text-[#888D9B]`}>
            {token.subtitle}
          </span>
        </div>
      </div>
      <span>{tokenBalance?.toFixed(4)}</span>
    </>
  );
};

export default SwapTokenSelectInfo;
