import React from 'react';

import './App.scss';
import { AllCoinsPage } from './pages/AllCoinsPage';
import { CoinPage } from './pages/CoinPage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const App: React.FC = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllCoinsPage />} />
          <Route path="/coin/:coinId" element={<CoinPage />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};
