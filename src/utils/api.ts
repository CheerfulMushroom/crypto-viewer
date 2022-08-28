import axios from 'axios';
import { Coin, CoinOverview, CurrencyId } from '../App/types';

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

export const getCoinPriceDynamic = async (
  coinId: string,
  currency: CurrencyId,
  days: number
): Promise<{ x: Date; y: number }[] | null> => {
  try {
    const response = await axios({
      method: 'GET',
      url: `${API_BASE}/coins/${coinId}/market_chart?vs_currency=${currency}&days=${days}`,
    });

    const pricesRaw: [number, number][] = response.data.prices;
    const pricesParsed = pricesRaw.map(([unixDate, price]) => ({
      x: new Date(unixDate),
      y: price,
    }));

    return pricesParsed;
  } catch (e) {
    return null;
  }
};
