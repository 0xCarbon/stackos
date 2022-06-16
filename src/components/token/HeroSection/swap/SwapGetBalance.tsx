/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from 'src/redux/hooks';
import { useAccount, useBalance } from 'wagmi';
import SwapButton from './SwapButton';
import { setTokenBalance } from '../../../../redux/actions/swap';

const SwapGetBalance = () => {
  const { data: account } = useAccount();

  const dispatch = useDispatch();
  const { swap } = useSelector((state) => state);
  const { tokenSelected } = swap;

  useBalance({
    addressOrName: account?.address,
    token: tokenSelected?.id === 1 ? null : tokenSelected?.address,
    chainId: tokenSelected?.chainId,
    onSuccess(data) {
      const balance = Number(data?.formatted);
      dispatch(setTokenBalance(balance));
    },
  });

  return <SwapButton disabled>Loading...</SwapButton>;
};

export default SwapGetBalance;
