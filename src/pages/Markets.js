// Markets.js

import React from 'react';
import './Markets.css';
import coinbase from '../images/coinbase.jpg';
import bybit from '../images/bybit.jpg';
import Binance from '../images/binance.jpg';
import okx from '../images/okx.png'

const marketData = [
  {
    name: 'Coinbase',
    description: 'Одна из самых популярных бирж в США.Известна своим удобным интерфейсом и высоким уровнем безопасности.Подходит как для новичков, так и для опытных трейдеров.',
    image: coinbase,
    link: 'https://www.coinbase.com/'
  },
  {
    name: 'Bybit',
    description: 'Долговременная и надежная криптовалютная биржа.Поддерживает широкий спектр криптовалют и фиатных валют.Известна своими низкими комиссиями и высокой безопасностью.',
    image: bybit,
    link: 'https://www.bybit.com/'
  },
  {
    name: 'Binance',
    description: 'Одна из старейших криптовалютных бирж.Поддерживает продвинутые функции торговли, такие как маржинальная торговля и P2P-кредитование.',
    image: Binance,
    link: 'https://www.binance.com/'
  },
];

function Markets() {
  return (
    <div className="markets-container">
      <h2>Markets</h2>
      <div className="market-cards">
        {marketData.map((market, index) => (
          <div key={index} className="market-card">
            <img src={market.image} alt={market.name} />
            <div className="market-card-content">
              <h3>{market.name}</h3>
              <p>{market.description}</p>
              <a href={market.link} target="_blank" rel="noopener noreferrer">Ссылка на сайт</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Markets;
