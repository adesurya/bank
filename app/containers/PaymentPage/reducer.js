/*
 *
 * PaymentPage reducer
 *
 */
import produce from 'immer';
import {
  CHANGE_ACCOUNT_NUMBER,
  ENTER_ACCOUNT_NUMBER,
  ENTER_ACCOUNT_NUMBER_SUCCESS,
  ENTER_ACCOUNT_NUMBER_ERROR,
  CLEAR_ACCOUNT_BILLS,
  SEARCH_ACCOUNT_BILLS,
  SEARCH_ACCOUNT_BILLS_SUCCESS,
  SEARCH_ACCOUNT_BILLS_ERROR,
  CHANGE_AMOUNT_MONEY,
  ENTER_AMOUNT_MONEY,
  ENTER_AMOUNT_MONEY_SUCCESS,
  ENTER_AMOUNT_MONEY_ERROR,
  CHANGE_TRANSFER_TITLE,
  ENTER_TRANSFER_TITLE,
  ENTER_TRANSFER_TITLE_SUCCESS,
  ENTER_TRANSFER_TITLE_ERROR,
  CHANGE_AUTHORIZATION_KEY,
  ENTER_AUTHORIZATION_KEY,
  ENTER_AUTHORIZATION_KEY_SUCCESS,
  ENTER_AUTHORIZATION_KEY_ERROR,
  SEND_AUTHORIZATION_KEY,
  SEND_AUTHORIZATION_KEY_SUCCESS,
  SEND_AUTHORIZATION_KEY_ERROR,
  MAKE_PAYMENT,
  MAKE_PAYMENT_SUCCESS,
  MAKE_PAYMENT_ERROR,
  PAYMENT_STEP_NEXT,
  PAYMENT_STEP_BACK,
  GET_CURRENCY,
  GET_CURRENCY_SUCCESS,
  GET_CURRENCY_ERROR,
  GET_AUTHORIZATION_KEY,
  GET_AUTHORIZATION_KEY_SUCCESS,
  GET_AUTHORIZATION_KEY_ERROR,
} from './constants';

export const initialState = {
  accountNumber: '',
  amountMoney: '',
  transferTitle: '',
  authorizationKey: '',
  recipientId: '',
  activeStep: 0,
  isLoading: false,
  error: '',
  suggestions: [],
};

/* eslint-disable default-case, no-param-reassign */
const paymentPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_ACCOUNT_NUMBER:
        draft.accountNumber = action.value;
        break;
      case CHANGE_AMOUNT_MONEY:
        draft.amountMoney = action.amountMoney;
        break;
      case CHANGE_TRANSFER_TITLE:
        draft.transferTitle = action.transferTitle;
        break;
      case SEARCH_ACCOUNT_BILLS:
        if (draft.accountNumber !== action.value && action.value.length <= 26) {
          draft.suggestions = action.value;
          draft.isLoading = true;
        }
        break;
      case SEARCH_ACCOUNT_BILLS_SUCCESS:
        draft.suggestions = action.suggestions;
        draft.isLoading = false;
        break;
      case CLEAR_ACCOUNT_BILLS:
        draft.suggestions = [];
        break;
      case ENTER_ACCOUNT_NUMBER:
        draft.isLoading = true;
        draft.accountNumber = action.value;
        break;
      case ENTER_ACCOUNT_NUMBER_SUCCESS:
        draft.recipientId = action.recipientId;
        draft.isLoading = false;
        break;
      case PAYMENT_STEP_NEXT:
        draft.activeStep += 1;
        break;
      case PAYMENT_STEP_BACK:
        draft.activeStep -= 1;
        break;
    }
  });

export default paymentPageReducer;