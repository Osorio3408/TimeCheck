import React from 'react';

import HeaderHome from './components/layout/Header/HeaderHome';
import { Routes,Route } from 'react-router-dom';
import { Home } from './components/page/Home/Home';

import './App.css';

function App() {
  return (
    <>
     <HeaderHome/>

     <Home/>
     
    </>
  )}
export default App;
