import React, { useState, useEffect } from 'react';

import './PresentationSlider.scss';

import starImage from '../../assets/icons/star-icon.svg';
import timerImage from '../../assets/icons/timer-icon.svg';

const PresentationSlider = ({ slidesData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
    const nextSlide = (currentSlide - 100) % (slidesData.length * 100);

    setCurrentSlide(nextSlide);
    }, 7000);

    return () => clearInterval(slideInterval);
  }, [currentSlide, slidesData]);

  return (
    <div 
      className="presentation-slider"
      style={{ transform: `translateY(${currentSlide}%)` }}
    >
      {slidesData.map(slide => (
        <div
          className="presentation-slider__item"
          key={slide.id}
        >
          <img className="presentation-slider__item-img" src={slide.image} alt="" />
          <div className="presentation-slider__item-data">
            <div className="presentation-slider__item-name">
              <span className="presentation-slider__item-title">
                {slide.title}
              </span>
              <span className="presentation-slider__item-rate">
                <span className="presentation-slider__item-grade">
                {slide.grade}
                </span>
                <img src={starImage} alt="star" />
              </span>
            </div>
            <div className="presentation-slider__item-time">
              <img src={timerImage} alt="time" />
              <span>
                {slide.cookingTime}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PresentationSlider;