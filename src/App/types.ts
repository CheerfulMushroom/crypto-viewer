export type CurrencyId = 'usd' | 'eur' | 'rub' | 'btc' | 'eth';

enum A {
  a,
  b,
  c,
}

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
    current_price: Record<CurrencyId, number>;

    price_change_24h: number;
    price_change_24h_in_currency: Record<CurrencyId, number>;

    price_change_percentage_24h: number;
    price_change_percentage_24h_in_currency: Record<CurrencyId, number>;
    price_change_percentage_7d: number;
    price_change_percentage_7d_in_currency: Record<CurrencyId, number>;
    price_change_percentage_14d: number;
    price_change_percentage_14d_in_currency: Record<CurrencyId, number>;
    price_change_percentage_30d: number;
    price_change_percentage_30d_in_currency: Record<CurrencyId, number>;
    price_change_percentage_60d: number;
    price_change_percentage_60d_in_currency: Record<CurrencyId, number>;
    price_change_percentage_200d: number;
    price_change_percentage_200d_in_currency: Record<CurrencyId, number>;
    price_change_percentage_1y: number;
    price_change_percentage_1y_in_currency: Record<CurrencyId, number>;
  };
};
