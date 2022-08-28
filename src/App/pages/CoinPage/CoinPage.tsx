import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Coin, CurrencyId } from 'src/App/types';

import { getCoin, getCoinPriceDynamic } from '@utils/api';
import { prettifyPrice, sign } from '@utils/numbers';

import { Card } from '@components/Card';
import { PriceChart } from '@components/PriceChart';
import type { Point } from '@components/PriceChart';

export const CoinPage: React.FC = () => {
  const params = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [coin, setCoin] = useState<Coin | null>(null);
  const [priceDynamic, setPriceDynamic] = useState<Point[]>([]);

  const currency: CurrencyId = 'usd';

  useEffect(() => {
    const fetchCoin = async () => {
      const coin = await getCoin(params.coinId || '');
      setIsLoading(false);

      if (coin === null) {
        return;
      }

      setCoin(coin);
    };

    const fetchCoinPrices = async () => {
      const prices = await getCoinPriceDynamic(
        params.coinId || '',
        currency,
        30
      );

      if (prices === null) {
        return;
      }

      // console.log(prices);
      setPriceDynamic(prices);
    };

    setIsLoading(true);
    fetchCoin();
    fetchCoinPrices();
  }, [params.coinId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!coin) {
    return <div>Error getting the coin info :(</div>;
  }

  const currentPriceString = `
    ${currency.toUpperCase()} ${prettifyPrice(
    coin.market_data.current_price[currency]
  )}`;

  const priceChangeString = prettifyPrice(
    coin.market_data.price_change_24h_in_currency[currency],
    true
  );
  const priceChangePercentsString = prettifyPrice(
    coin.market_data.price_change_percentage_24h_in_currency[currency],
    true
  );

  return (
    <div className={'coin-page'}>
      <div className={'coin-page__header'}>
        <h1 className={'coin-page__title'}>{coin.name}</h1>
      </div>

      <div className={'coin-page__price-info'}>
        <div className={'coin-page__current-price'}>{currentPriceString}</div>
        <div className={'coin-page__price-dynamic'}>
          {priceChangeString} ({priceChangePercentsString})
        </div>
      </div>

      <PriceChart points={priceDynamic} showGrid />

      <div className={'coin-page__time-options'}></div>
      <Card image={coin.image.large} title={coin.name} subtitle={'00.00 BTC'} />
      <Card
        image={coin.image.large}
        title={'Transactions'}
        subtitle={'00.00 BTC'}
      />
    </div>
  );
};
