import React from 'react';
import HeaderHome from './components/layout/Header/HeaderHome';
import { Routes,Route } from 'react-router-dom';
import { Home } from './components/page/Home';

import './App.css';

function App() {
  return (
    <>
     <HeaderHome/>

     <Routes>
        <Route path='/' element/>
     </Routes>
    </>
  );
}

export default App;
