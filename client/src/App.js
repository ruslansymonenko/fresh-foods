import { Route, Routes } from 'react-router-dom';

import Layout from './pages/Layout.js';
import StartPage from './pages/StartPage/StartPage';
import HomePage from './pages/HomePage/HomePage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import MenuPage from './pages/MenuPage/MenuPage';
import AboutPage from './pages/AboutPage/AboutPage';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<Layout/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/start" element={<StartPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/menu" element={<MenuPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
