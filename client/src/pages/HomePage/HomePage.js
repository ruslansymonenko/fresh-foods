import './HomePage.scss';

import decorCircleImage from '../../assets/main-page-images/decor-circle.png';
import decorTomatoesImage from '../../assets/main-page-images/decor-tomatoes.png';

const HomePage = () => {
  return (
    <div className="home">
      <div className="container">Home</div>

      <img className="home-decor__circle" src={decorCircleImage} alt="decor circle"></img>
      <img className="home-decor__tomatoes" src={decorTomatoesImage} alt="decor circle"></img>
    </div>
  );
};

export default HomePage;