import HomePageOrder from '../../containers/HomePageOrder/HomePageOrder';
import HomePagePresentation from '../../containers/HomePagePresentation/HomePagePresentation';
import HomePageSuggestions from '../../containers/HomePageSuggestions/HomePageSuggestions';

import './HomePage.scss';

import decorCircleImage from '../../assets/main-page-images/decor-circle.png';
import decorTomatoesImage from '../../assets/main-page-images/decor-tomatoes.png';

const HomePage = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="home-content">
          <div className="home-content__section">
            <h1 className="home-title">
              Order your
            </h1>
            <h2 className="home-subtitle">
              favorite foods
            </h2>
            <h3 className="home-tagline">
              Fresh Foods Cafe: A Culinary Journey with best dishes!
            </h3>
            <HomePageOrder/>
            <HomePageSuggestions/>
          </div>
          <div className="home-content__section">
            <HomePagePresentation/>
          </div>
        </div>
      </div>

      <img className="home-decor__circle" src={decorCircleImage} alt="decor circle"></img>
      <img className="home-decor__tomatoes" src={decorTomatoesImage} alt="decor circle"></img>
    </div>
  );
};

export default HomePage;