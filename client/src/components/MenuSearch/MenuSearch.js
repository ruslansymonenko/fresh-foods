import { useState } from 'react';

import Button from '../Button/Button';

import './MenuSearch.scss';

import searchImage from '../../assets/icons/search.svg';

const MenuSearch = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearchClick = () => {
    console.log('Search');
  }

  return (
    <div className="menu-search">
      <input 
        className="menu-search__input" 
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <Button
        classes={'menu-search__btn'}
        action={handleSearchClick}
      >
        <img src={searchImage} alt="search" />
      </Button>
    </div>
  );
};

export default MenuSearch;