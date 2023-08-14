import MenuSearch from '../../components/MenuSearch/MenuSearch';
import CategoriesSlider from '../../containers/CategoriesSlider/CategoriesSlider';

import './MenuPage.scss';

const MenuPage = () => {
  return (
    <div className="menu">
      <div className="container">
        <div className="menu-content">
          <div className="menu-controllers">
            <MenuSearch/>
            <CategoriesSlider/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;