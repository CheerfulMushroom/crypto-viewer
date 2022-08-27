import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom/client';

import './App.scss';
import { AllCoinsPage } from './pages/AllCoinsPage';
import { Coin } from './types';
import { CoinPage } from './pages/CoinPage';

export const App: React.FC = () => {
  const [coins, setCoins] = React.useState<Coin[]>([]);
  React.useEffect(() => {
    const fetchCoins = async () => {
      const response = await axios.get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd'
      );
      if (response.status !== 200) {
        return;
      }
      console.log(response.data);
      setCoins(response.data);
    };

    fetchCoins();
  }, []);

  return (
    <React.StrictMode>
      {/* <AllCoinsPage coins={coins} /> */}
      <CoinPage coin={coins[0]} />
    </React.StrictMode>
  );
};
