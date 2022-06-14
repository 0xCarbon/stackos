import { action } from 'typesafe-actions';
import { SwapActionTypes, SwapTypes } from '../types';

export function setSettingsStatus(value: boolean): SwapActionTypes {
  return action(SwapTypes.SET_SETTINGS_STATUS, { value });
}

export function setTokenSelectStatus(value: boolean): SwapActionTypes {
  return action(SwapTypes.SET_TOKEN_SELECT_STATUS, { value });
}

export function setErrorStatus(value: boolean): SwapActionTypes {
  return action(SwapTypes.SET_ERROR_STATUS, { value });
}

export function setLoading(value: boolean): SwapActionTypes {
  return action(SwapTypes.SET_LOADING, { value });
}

export function setStackPrice(value: number): SwapActionTypes {
  return action(SwapTypes.SET_STACK_PRICE, { value });
}

export function setFromTokenAmount(value: number): SwapActionTypes {
  return action(SwapTypes.SET_FROM_TOKEN_AMOUNT, { value });
}

export function setToTokenAmount(value: number): SwapActionTypes {
  return action(SwapTypes.SET_TO_TOKEN_AMOUNT, { value });
}

export function setFromTokenPrice(value: number): SwapActionTypes {
  return action(SwapTypes.SET_FROM_TOKEN_PRICE, { value });
}

export function setExpectedOutput(value: number): SwapActionTypes {
  return action(SwapTypes.SET_EXPECTED_OUTPUT, { value });
}

export function setTokenOptions(value: any[]): SwapActionTypes {
  return action(SwapTypes.SET_TOKEN_OPTIONS, { value });
}

export function setTokenSelected(value: any): SwapActionTypes {
  return action(SwapTypes.SET_TOKEN_SELECTED, { value });
}

export function setStackAddress(value: string): SwapActionTypes {
  return action(SwapTypes.SET_STACK_ADDRESS, { value });
}

export function setNetworkSelected(value: any): SwapActionTypes {
  return action(SwapTypes.SET_NETWORK_SELECTED, { value });
}

export function setSlippageAmount(value: number): SwapActionTypes {
  return action(SwapTypes.SET_SLIPPAGE_AMOUNT, { value });
}

export function setErrorMessage(value: string): SwapActionTypes {
  return action(SwapTypes.SET_ERROR_MESSAGE, { value });
}

export function setSummaryStatus(value: boolean): SwapActionTypes {
  return action(SwapTypes.SET_SUMMARY_STATUS, { value });
}

export function setWalletModalStatus(value: boolean): SwapActionTypes {
  return action(SwapTypes.SET_WALLET_MODAL_STATUS, { value });
}

export function setEstimatedGas(value: number): SwapActionTypes {
  return action(SwapTypes.SET_ESTIMATED_GAS, { value });
}

export function setTokenBalance(value: number | undefined | null): SwapActionTypes {
  return action(SwapTypes.SET_TOKEN_BALANCE, { value });
}

export function resetState(): SwapActionTypes {
  return action(SwapTypes.RESET_STATE);
}
