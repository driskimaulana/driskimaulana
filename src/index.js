import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Portfolio from './components/Main/Portfolio/Portfolio';
import PortfolioDetails from './components/Main/PortfolioDetails/PortfolioDetails';
import PortfolioPage from './components/Portfolio/Portfolio';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/portfolio/:slug' element={<PortfolioPage />} />
      </Routes>
    </BrowserRouter>
    {/* <App /> */}
  </React.StrictMode>
);
