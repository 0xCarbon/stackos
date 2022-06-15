/* eslint-disable react-hooks/exhaustive-deps */
import { useAccount, useBalance } from 'wagmi';
import { useDispatch } from 'react-redux';
import { useSelector } from 'src/redux/hooks';
import SwapButton from '../SwapButton';
import { setTokenBalance } from '../../../../../redux/swap/actions';

const SwapGetBalance = () => {
  const { data: account } = useAccount();

  const dispatch = useDispatch();
  const { general } = useSelector((state) => state);
  const { tokenSelected } = general;

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
