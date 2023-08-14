import { useState, useEffect } from 'react';

import FoodCategory from '../../components/FoodCategory/FoodCategory';

import './CategoriesSlider.scss';

import arrowImage from '../../assets/icons/arrow-right-icon.svg';
import testImage from '../../assets/test-images/pizza-icon.svg';

const CategoriesSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesShift, setSlidesShift] = useState(0);

  const testData = [
    {
      id: 1,
      name: 'pizza',
      img: testImage,
    },
    {
      id: 2,
      name: 'salad',
      img: testImage,
    },
    {
      id: 3,
      name: 'drinks',
      img: testImage,
    },
    {
      id: 4,
      name: 'pasta',
      img: testImage,
    },
    {
      id: 5,
      name: 'meat',
      img: testImage,
    },
    {
      id: 6,
      name: 'deserts',
      img: testImage,
    },
    {
      id: 7,
      name: 'burgers',
      img: testImage,
    },
    {
      id: 8,
      name: 'pizza',
      img: testImage,
    },
        {
      id: 9,
      name: 'deserts',
      img: testImage,
    },
    {
      id: 10,
      name: 'pizza',
      img: testImage,
    },
        {
      id: 11,
      name: 'deserts',
      img: testImage,
    },
    {
      id: 12,
      name: 'salad',
      img: testImage,
    },
  ];

  const containerWidth = 1750;
  const slidesAmount = testData.length + 1;

  const calculateShiftAmount = (amount) => {
    const shiftAmount = 0;
  }

  const nextSlide = () => {
    if (currentSlide <= slidesAmount) {
      setCurrentSlide(currentSlide + 1);
      console.log(currentSlide);
      setSlidesShift((100 / slidesAmount) * -currentSlide);
    }
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide - 1);
    setSlidesShift((100 / slidesAmount) * currentSlide);
  };


  useEffect(() => {

  }, [slidesShift]);


  return (
    <div className="categories-slider">
      <div 
        className="categories-slider__slides"
      >
        <div 
          className="categories-slider__slides-container"
          style={{
            transform: `translateX(${slidesShift}%)`,
            width: `${containerWidth}px`,
          }}
        >
          {
            testData.map(category => (
              <FoodCategory
                key={category.id}
                text={category.name}
                width={100 / slidesAmount}
              />
            ))
          }
        </div>
      </div>

      <button 
        className="categories-slider__btn categories-slider__btn-next"
        onClick={nextSlide}
      >
        <img src={arrowImage} alt="next category" />
      </button>
      <button 
        className="categories-slider__btn categories-slider__btn-prev"
        onClick={prevSlide}
      >
        <img src={arrowImage} alt="next category" />
      </button>
    </div>
  );
};

export default CategoriesSlider;