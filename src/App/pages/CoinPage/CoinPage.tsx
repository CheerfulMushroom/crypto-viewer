import { Card } from '@components/Card';
import React from 'react';
import { Coin } from 'src/App/types';

export type CoinPageProps = {
  coin?: Coin;
};

export const CoinPage: React.FC<CoinPageProps> = ({ coin }) => {
  if (!coin) {
    return <div>empty</div>;
  }

  return (
    <div className={'coin-page'}>
      <div className={'coin-page__header'}>
        <span className={'coin-page__title'}>{coin.name}</span>
      </div>

      <div className={'coin-page__price-info'}>
        <div className={'coin-page__current-price'}>₹98,509.75</div>
        <div className={'coin-page__price-dynamic'}>+ 1700.254 (9.77%)</div>
      </div>

      <div className={'coin-page__price-chart'}>CHART!!!</div>
      <div className={'coin-page__time-options'}></div>
      <Card image={coin.image} title={coin.name} subtitle={'00.00 BTC'} />
      <Card image={coin.image} title={'Transactions'} subtitle={'00.00 BTC'} />
    </div>
  );
};
