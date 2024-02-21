import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './components/App/App';

import './styles/index.scss';
import About from './components/About/about';
import { UserContextProvider } from './components/ContextProvider/ContextProvider'




ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <BrowserRouter>

      
      <UserContextProvider>
      <Routes>
      <Route path="/" element={  <App />} />

      <Route path="/about" element={  <About />} />



    </Routes>
    </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
