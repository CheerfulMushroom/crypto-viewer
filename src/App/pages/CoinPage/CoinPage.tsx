import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Coin } from 'src/App/types';

import { getCoin } from '@utils/api';

import { Card } from '@components/Card';

export const CoinPage: React.FC = () => {
  const params = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [coin, setCoin] = useState<Coin | null>(null);

  useEffect(() => {
    const fetchCoin = async () => {
      const coin = await getCoin(params.coinId || '');
      setIsLoading(false);

      if (coin === null) {
        return;
      }

      setCoin(coin);
    };

    setIsLoading(true);
    fetchCoin();
  }, [params.coinId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!coin) {
    return <div>Error getting the coin info :(</div>;
  }

  return (
    <div className={'coin-page'}>
      <div className={'coin-page__header'}>
        <h1 className={'coin-page__title'}>{coin.name}</h1>
      </div>

      <div className={'coin-page__price-info'}>
        <div className={'coin-page__current-price'}>`${coin.market_data.current_price}`</div>
        <div className={'coin-page__price-dynamic'}>+ 1700.254 (9.77%)</div>
      </div>

      <div className={'coin-page__price-chart'}>CHART!!!</div>
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
