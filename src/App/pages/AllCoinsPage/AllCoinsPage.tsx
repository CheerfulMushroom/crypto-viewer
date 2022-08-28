import React from 'react';

import './AllCoinsPage.scss';

import { CoinOverview } from 'src/App/types';
import { Card } from '@components/Card';
import { getCoinsList } from '@utils/api';
import { useNavigate } from 'react-router-dom';

export const AllCoinsPage: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [coins, setCoins] = React.useState<CoinOverview[]>([]);

  React.useEffect(() => {
    const fetchCoins = async () => {
      const list = await getCoinsList('usd');
      setIsLoading(false);

      if (list === null) {
        return;
      }

      setCoins(list);
    };

    setIsLoading(true);
    fetchCoins();
  }, []);

  const clickHandler = (coin: CoinOverview) => {
    return () => {
      navigate(`/coin/${coin.id}`);
    };
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={'all-coins-page__coins-list'}>
      {coins.map((coin) => (
        <Card
          key={coin.id}
          image={coin.image}
          title={coin.name}
          subtitle={coin.symbol.toUpperCase()}
          onClick={clickHandler(coin)}
        />
      ))}
    </div>
  );
};
