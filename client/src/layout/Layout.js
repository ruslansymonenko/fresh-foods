import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';

import StartPage from '../pages/StartPage/StartPage';

import Header from './Header/Header';

const Layout = () => {
  const isStartPage = useSelector((state) => state.startPageShowing.isStartPage);

  return (
    isStartPage ? (
      <div className="app-container">
        <Suspense fallback={'loading...'}>
          <StartPage/>
        </Suspense>
      </div>
    ) : (
      <div className="app-container">
        <Header/>
        <main className="main">
          <Suspense fallback={'loading...'}>
            <Outlet/>
          </Suspense>
        </main>
      </div>
    )
  );
};

export default Layout;