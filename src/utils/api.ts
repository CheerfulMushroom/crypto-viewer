import axios from 'axios';
import { Coin, CoinOverview } from '../App/types';

const API_BASE = 'https://api.coingecko.com/api/v3';

export const getSupportedCurrencies = async (): Promise<string | null> => {
  try {
    const response = await axios({
      method: 'GET',
      url: `${API_BASE}/simple/supported_vs_currencies`,
    });

    return response.data;
  } catch (e) {
    return null;
  }
};

export const getCoinsList = async (
  currency: string
): Promise<CoinOverview[] | null> => {
  try {
    const response = await axios({
      method: 'GET',
      url: `${API_BASE}/coins/markets?vs_currency=${currency}`,
    });

    return response.data;
  } catch (e) {
    return null;
  }
};

export const getCoin = async (id: string): Promise<Coin | null> => {
  try {
    const response = await axios({
      method: 'GET',
      url: `${API_BASE}/coins/${id}`,
    });

    return response.data;
  } catch (e) {
    return null;
  }
};

export const getCoinPriceDynamic = async (coin: Coin) => {
  return null;
};
