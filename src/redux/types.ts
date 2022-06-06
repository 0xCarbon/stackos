/* eslint-disable no-unused-vars */
export enum GeneralTypes {
  SET_LOADING = '@general/SET_LOADING',
  SET_STACK_PRICE = '@general/SET_STACK_PRICE',
  SET_FROM_TOKEN_AMOUNT = '@general/SET_FROM_TOKEN_AMOUNT',
  SET_TO_TOKEN_AMOUNT = '@general/SET_TO_TOKEN_AMOUNT',
  SET_FROM_TOKEN_PRICE = '@general/SET_FROM_TOKEN_PRICE',
  SET_EXPECTED_OUTPUT = '@general/SET_EXPECTED_OUTPUT',
  SET_SETTINGS_STATUS = '@general/SET_SETTINGS_STATUS',
  SET_TOKEN_SELECT_STATUS = '@general/SET_TOKEN_SELECT_STATUS',
  SET_ERROR_STATUS = '@general/SET_ERROR_STATUS',
  SET_TOKEN_OPTIONS = '@general/SET_TOKEN_OPTIONS',
  SET_TOKEN_SELECTED = '@general/SET_TOKEN_SELECTED',
  SET_STACK_ADDRESS = '@general/SET_STACK_ADDRESS',
  SET_NETWORK_SELECTED = '@general/SET_NETWORK_SELECTED',
  SET_SLIPPAGE_AMOUNT = '@general/SET_SLIPPAGE_AMOUNT',
  SET_ERROR_MESSAGE = '@general/SET_ERROR_MESSAGE',
}

export interface SetSettingsStatus {
  type: GeneralTypes.SET_SETTINGS_STATUS;
}

export interface SetTokenSelectStatus {
  type: GeneralTypes.SET_TOKEN_SELECT_STATUS;
}

export interface SetErrorStatus {
  type: GeneralTypes.SET_ERROR_STATUS;
}

export interface SetLoading {
  type: GeneralTypes.SET_LOADING;
}

export interface SetStackPrice {
  type: GeneralTypes.SET_STACK_PRICE;
  payload: { value: number };
}

export interface SetFromTokenAmount {
  type: GeneralTypes.SET_FROM_TOKEN_AMOUNT;
  payload: { value: number };
}

export interface SetToTokenAmount {
  type: GeneralTypes.SET_TO_TOKEN_AMOUNT;
  payload: { value: number };
}

export interface SetFromTokenPrice {
  type: GeneralTypes.SET_FROM_TOKEN_PRICE;
  payload: { value: number };
}

export interface SetExpectedOutput {
  type: GeneralTypes.SET_EXPECTED_OUTPUT;
  payload: { value: number };
}

export interface SetTokenOptions {
  type: GeneralTypes.SET_TOKEN_OPTIONS;
  payload: { value: any[] };
}

export interface SetTokenSelected {
  type: GeneralTypes.SET_TOKEN_SELECTED;
  payload: { value: any };
}

export interface SetStackAddress {
  type: GeneralTypes.SET_STACK_ADDRESS;
  payload: { value: string };
}

export interface SetNetworkSelected {
  type: GeneralTypes.SET_NETWORK_SELECTED;
  payload: { value: any };
}

export interface SetSlippageAmount {
  type: GeneralTypes.SET_SLIPPAGE_AMOUNT;
  payload: { value: number };
}

export interface SetErrorMessage {
  type: GeneralTypes.SET_ERROR_MESSAGE;
}

export type GeneralActionTypes =
  | SetStackPrice
  | SetSettingsStatus
  | SetTokenSelectStatus
  | SetErrorStatus
  | SetLoading
  | SetFromTokenAmount
  | SetToTokenAmount
  | SetFromTokenPrice
  | SetExpectedOutput
  | SetTokenOptions
  | SetTokenSelected
  | SetStackAddress
  | SetNetworkSelected
  | SetSlippageAmount
  | SetErrorMessage;

export interface GeneralState {
  loading: boolean;
  fromTokenAmount: number;
  toTokenAmount: number;
  fromTokenPrice: number;
  stackPrice: number;
  expectedOutput: number;
  isSettingsOpen: boolean;
  isTokenSelectOpen: boolean;
  isErrorOpen: boolean;
  tokenOptions: any[];
  tokenSelected: any;
  stackAddress: string;
  networkSelected: any;
  slippageAmount: number;
  errorMessage: string;
}
