import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import Layout from './layout/Layout.js';

const StartPage = lazy(() => import('./pages/StartPage/StartPage'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const MenuPage = lazy(() => import('./pages/MenuPage/MenuPage'));
const AboutPage = lazy(() => import('./pages/AboutPage/AboutPage'));
const CartPage = lazy(() => import('./pages/CartPage/CartPage'));


import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index path="/" element={<HomePage/>}/>
          <Route index path="/home" element={<HomePage/>}/>
          <Route path="/start" element={<StartPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/menu" element={<MenuPage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/cart" element={<CartPage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
