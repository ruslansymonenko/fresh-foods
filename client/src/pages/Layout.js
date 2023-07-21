
import StartPage from './StartPage/StartPage';
import HomePage from './HomePage/HomePage';

const Layout = () => {
  const isFirstEntering = false;

  return (
    <div className="app-container">
      {
        isFirstEntering ? (
          <StartPage/>
        ) : (
          <HomePage/>
        )
      }
    </div>
  );
};

export default Layout;