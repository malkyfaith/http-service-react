import { TEST_TOKEN_KEY, TEST_TOKEN_VALUE } from '../constants/token';

export const setTokenIntoStorage = (token: string) => {
  if (token) {
    window.localStorage.setItem(TEST_TOKEN_KEY, TEST_TOKEN_VALUE);
  }
};

export const getTokenFromStorage = () => {
  return window.localStorage.getItem(TEST_TOKEN_KEY);
};

export const removeTokenFromStorage = () => window.localStorage.removeItem(TEST_TOKEN_KEY);
