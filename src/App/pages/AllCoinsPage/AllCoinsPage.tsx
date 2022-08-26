import React from 'react';

import './AllCoinsPage.scss';

import { Coin } from 'src/App/types';
import { Card } from '@components/Card';

export type AllCoinsPageProps = {
  coins: Coin[];
};

export const AllCoinsPage: React.FC<AllCoinsPageProps> = ({ coins }) => {
  return (
    <div className={'all-coins-page__coins-list'}>
      {coins.map((coin) => (
        <Card
          key={coin.id}
          image={coin.image}
          title={coin.name}
          subtitle={coin.symbol.toUpperCase()}
          onClick={() => {}}
        />
      ))}
    </div>
  );
};
