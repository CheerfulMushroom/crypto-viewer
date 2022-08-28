export type CurrencyId = 'usd' | 'eur' | 'rub' | 'btc' | 'eth';

export type Currency = {
  id: CurrencyId;
  name: string;
  symbol?: string;
};

export type CoinOverview = {
  id: string;
  name: string;
  image: string;
  symbol: string;
};

export type Coin = {
  id: string;
  name: string;
  symbol: string;

  image: {
    thumb: string;
    small: string;
    large: string;
  };

  market_data: {
    current_price: { [id: CurrencyId]: number };
  };
};
