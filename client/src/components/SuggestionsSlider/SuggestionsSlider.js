import { useEffect, useState } from 'react';

import './SuggestionsSlider.scss';

import arrowImage from '../../assets/icons/suggestions-slider-arrow.svg';

const SuggestionsSlider = ({ suggestions }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if(currentSlide < suggestions.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  };

  const prevSlide = () => {
    if(currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(suggestions.length - 1);
    }
  };

  useEffect(() => {
    console.log(currentSlide);
  }, [currentSlide]);

  return (
    <div className="suggestions-slider">
      <div 
        className="suggestions-slider__items"
      >
        {
          suggestions.map(item => (
            <div
              className="suggestions-slider__items-item"
              key={item.id}
              style={{ transform: `translateX(${currentSlide * -100}%)` }}
            > 
              <div className="suggestions-slider__items-image">
                <img src={item.photo} alt="" />
              </div>
              <h4>
                {item.name}
              </h4>
              <p>
                {`${item.price} ${item.currency}`}
              </p>
            </div>
          ))
        }
      </div>

      <button 
        className="suggestions-slider__btn suggestions-slider__btn-right"
        onClick={nextSlide}
      >
        <img src={arrowImage} alt="arrow" />
      </button>
      <button 
        className="suggestions-slider__btn suggestions-slider__btn-left"
        onClick={prevSlide}
      >
        <img src={arrowImage} alt="arrow" />
      </button>
    </div>
  );
};

export default SuggestionsSlider;