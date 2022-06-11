/* eslint-disable default-param-last */
import { Reducer } from '@reduxjs/toolkit';
import { GeneralState, GeneralTypes } from '../types';

import * as Actions from '../actions/general';

const INITIAL_STATE: GeneralState = {
  stackPrice: 0,
  isSettingsOpen: false,
  isTokenSelectOpen: false,
  isErrorOpen: false,
  loading: false,
  fromTokenAmount: null,
  toTokenAmount: null,
  fromTokenPrice: 0,
  expectedOutput: 0,
  tokenOptions: [
    { id: 1, title: 'ETH', icon: 'eth' },
    { id: 2, title: 'USDC', icon: 'usdc' },
    { id: 3, title: 'USDT', icon: 'usdt' },
    { id: 43, title: 'WETH', icon: 'weth' },
  ],
  tokenSelected: { id: 1, title: 'ETH', icon: 'eth' },
  stackAddress: '',
  networkSelected: {
    id: 137,
    title: 'Polygon PoS',
    icon: 'polygon',
  },
  slippageAmount: 0.5,
  errorMessage: '',
  isSummaryOpen: false,
  isWalletModalOpen: false,
  estimatedGas: null,
};

const reducer: Reducer<GeneralState> = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case GeneralTypes.SET_SETTINGS_STATUS:
      return { ...state, isSettingsOpen: payload.value };

    case GeneralTypes.SET_TOKEN_SELECT_STATUS:
      return { ...state, isTokenSelectOpen: payload.value };

    case GeneralTypes.SET_ERROR_STATUS:
      return { ...state, isErrorOpen: payload.value };

    case GeneralTypes.SET_LOADING:
      return { ...state, loading: payload.value };

    case GeneralTypes.SET_STACK_PRICE:
      return { ...state, stackPrice: payload.value };

    case GeneralTypes.SET_FROM_TOKEN_AMOUNT:
      return { ...state, fromTokenAmount: payload.value };

    case GeneralTypes.SET_TO_TOKEN_AMOUNT:
      return { ...state, toTokenAmount: payload.value };

    case GeneralTypes.SET_FROM_TOKEN_PRICE:
      return { ...state, fromTokenPrice: payload.value };

    case GeneralTypes.SET_EXPECTED_OUTPUT:
      return { ...state, expectedOutput: payload.value };

    case GeneralTypes.SET_TOKEN_OPTIONS:
      return { ...state, tokenOptions: payload.value };

    case GeneralTypes.SET_TOKEN_SELECTED:
      return { ...state, tokenSelected: payload.value };

    case GeneralTypes.SET_STACK_ADDRESS:
      return { ...state, stackAddress: payload.value };

    case GeneralTypes.SET_NETWORK_SELECTED:
      return { ...state, networkSelected: payload.value };

    case GeneralTypes.SET_SLIPPAGE_AMOUNT:
      return { ...state, slippageAmount: payload.value };

    case GeneralTypes.SET_ERROR_MESSAGE:
      return { ...state, errorMessage: payload.value };

    case GeneralTypes.SET_SUMMARY_STATUS:
      return { ...state, isSummaryOpen: payload.value };

    case GeneralTypes.SET_WALLET_MODAL_STATUS:
      return { ...state, isWalletModalOpen: payload.value };

    case GeneralTypes.SET_ESTIMATED_GAS:
      return { ...state, estimatedGas: payload.value };

    case GeneralTypes.RESET_STATE:
      return {
        ...state,
        stackPrice: 0,
        isSettingsOpen: false,
        isTokenSelectOpen: false,
        isErrorOpen: false,
        loading: false,
        fromTokenAmount: null,
        toTokenAmount: null,
        fromTokenPrice: 0,
        expectedOutput: 0,
        slippageAmount: 0.5,
        errorMessage: '',
        isSummaryOpen: false,
        isWalletModalOpen: false,
        estimatedGas: null,
      };

    default:
      return state;
  }
};

export const GeneralActions = Actions;
export default reducer;
