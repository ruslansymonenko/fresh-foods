import { Link } from 'react-router-dom';

import Button from '../Button/Button';

import './Header.scss';

import mainLogoImage from '../../assets/icons/main-logo.png';
import shoppingCartImage from '../../assets/icons/shopping-cart.svg';
import searchImage from '../../assets/icons/search.svg';
import personImage from '../../assets/icons/person-icon.svg';
import logOutImage from '../../assets/icons/log-out-icon.svg';

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header-content">
          <img className="header-logo" src={mainLogoImage} alt="main logo" />
          <nav className="header-nav">
            <ul className="header-nav__list">
              <li className="header-nav__list-item">
                <Link
                  className="header-nav__list-link"
                  to={'/home'}
                >
                  Home
                </Link>
              </li>
              <li className="header-nav__list-item">
                <Link
                  className="header-nav__list-link"
                  to={'/menu'}
                >
                  Menu
                </Link>
              </li>
              <li className="header-nav__list-item">
                <Link
                  className="header-nav__list-link"
                  to={'/about'}
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>
          <Link
            className="header-cart"
            to={'/cart'}
          >
            <img className="header-cart__image" src={shoppingCartImage} alt="shopping cart" />
            <div className="header-cart__counter">
              <span className="header-cart__counter-amount">
                0
              </span>
            </div>
          </Link>
          <div className="header-search">
            <img className="header-search__image" src={searchImage} alt="search" />
          </div>
          <div className="header-btns">
            <Button 
              classes={'header-btns__btn header-btns__btn-signin'}
            >
              <Link 
                className="header-btns__btn-link"
                to={'register'}
              >
                <img className="header-btns__btn-image" src={personImage} alt="sign in" />
                <span className="header-btns__btn-text">
                  Sign in
                </span>
              </Link>
            </Button>
            <Button
              classes={'header-btns__btn header-btns__btn-logout'}
            >
              <img className="header-btns__btn-image" src={logOutImage} alt="sign in" />
              <span className="header-btns__btn-text">
                Sign in
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;