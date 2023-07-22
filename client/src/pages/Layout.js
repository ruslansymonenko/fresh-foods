import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import StartPage from './StartPage/StartPage';

import Header from '../components/Header/Header';

const Layout = () => {
  const isFirstEntering = false;

  return (
    isFirstEntering ? (
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