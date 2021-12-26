import React from 'react';
import './assets/css/App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { LandingPage } from './LandingPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
