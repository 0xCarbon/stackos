import { action } from 'typesafe-actions';
import { GeneralActionTypes, GeneralTypes } from '../types';

export function setSettingsStatus(value: boolean): GeneralActionTypes {
  return action(GeneralTypes.SET_SETTINGS_STATUS, { value });
}

export function setTokenSelectStatus(value: boolean): GeneralActionTypes {
  return action(GeneralTypes.SET_TOKEN_SELECT_STATUS, { value });
}

export function setErrorStatus(value: boolean): GeneralActionTypes {
  return action(GeneralTypes.SET_ERROR_STATUS, { value });
}

export function setLoading(value: boolean): GeneralActionTypes {
  return action(GeneralTypes.SET_LOADING, { value });
}

export function setStackPrice(value: number): GeneralActionTypes {
  return action(GeneralTypes.SET_STACK_PRICE, { value });
}

export function setFromTokenAmount(value: number): GeneralActionTypes {
  return action(GeneralTypes.SET_FROM_TOKEN_AMOUNT, { value });
}

export function setToTokenAmount(value: number): GeneralActionTypes {
  return action(GeneralTypes.SET_TO_TOKEN_AMOUNT, { value });
}

export function setFromTokenPrice(value: number): GeneralActionTypes {
  return action(GeneralTypes.SET_FROM_TOKEN_PRICE, { value });
}

export function setExpectedOutput(value: number): GeneralActionTypes {
  return action(GeneralTypes.SET_EXPECTED_OUTPUT, { value });
}

export function setTokenOptions(value: any[]): GeneralActionTypes {
  return action(GeneralTypes.SET_TOKEN_OPTIONS, { value });
}

export function setTokenSelected(value: any): GeneralActionTypes {
  return action(GeneralTypes.SET_TOKEN_SELECTED, { value });
}

export function setStackAddress(value: string): GeneralActionTypes {
  return action(GeneralTypes.SET_STACK_ADDRESS, { value });
}

export function setNetworkSelected(value: any): GeneralActionTypes {
  return action(GeneralTypes.SET_NETWORK_SELECTED, { value });
}

export function setSlippageAmount(value: number): GeneralActionTypes {
  return action(GeneralTypes.SET_SLIPPAGE_AMOUNT, { value });
}

export function setErrorMessage(value: string): GeneralActionTypes {
  return action(GeneralTypes.SET_ERROR_MESSAGE, { value });
}

export function setSummaryStatus(value: boolean): GeneralActionTypes {
  return action(GeneralTypes.SET_SUMMARY_STATUS, { value });
}
