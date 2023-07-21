import { Outlet } from 'react-router-dom';

import StartPage from './StartPage/StartPage';

import Header from '../components/Header/Header';

const Layout = () => {
  const isFirstEntering = true;

  return (
    isFirstEntering ? (
      <div className="app-container">
        <StartPage/>
      </div>
    ) : (
      <div className="app-container">
        <Header/>
        <Outlet/>
      </div>
    )
  );
};

export default Layout;