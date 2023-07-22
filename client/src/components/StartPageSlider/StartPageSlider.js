import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { setIsStartPage } from '../../store/slices/startPageShowingSlice';

import ProgressButton from '../../components/ProgressButton/ProgressButton';

import './StartPageSlider.scss';

import sliderImage1 from '../../assets/start-page-slider/slide-1.jpg';
import sliderImage2 from '../../assets/start-page-slider/slide-2.jpg';
import sliderImage3 from '../../assets/start-page-slider/slide-3.jpg';
import sliderImage4 from '../../assets/start-page-slider/slide-4.jpg';

const StartPageSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [slidesProgress, setSlidesProgress] = useState('0%');

  const dispatch = useDispatch();

  const sliderData = [
    {
      slideHeader: 'Welcome to Fresh Foods Cafe',
      slideText: 'Discover the freshest and healthiest food options at Fresh Foods Cafe. Our menu features a delightful selection of salads, smoothies, and wholesome dishes made with organic, locally sourced ingredients. Embrace a healthier lifestyle with us',
      slideImg: sliderImage1,
    },
          {
      slideHeader: 'Nourish Your Body and Soul',
      slideText: 'At Fresh Food Cafe, we believe that food is more than just sustenance; it\'s a way to nourish both your body and soul. Our chefs create culinary masterpieces that not only taste great but also provide the essential nutrients your body needs to thrive.',
      slideImg: sliderImage2,
    },
          {
      slideHeader: 'A Taste of Nature\'s Goodness',
      slideText: 'Indulge in the natural goodness of our menu, where every bite is packed with vitamins and minerals. Whether you crave a refreshing salad or a hearty grain bowl, we\'ve got you covered.',
      slideImg: sliderImage3,
    },
          {
      slideHeader: 'Your Journey to Best Food Starts Here',
      slideText: 'Embark on a journey with our Cafe. We\'re committed to serving you delicious and nutritious meals that support your health goals. Join us in making every dining experience a delightful step toward a healthier you.',
      slideImg: sliderImage4,
    },
  ];

  const changeActiveSlide = () => {
    if(activeSlide < (sliderData.length - 1)) {
      setActiveSlide(activeSlide + 1);
      let currentSlidesProgress = ((activeSlide + 1) / sliderData.length) * 100;
      setSlidesProgress(`${currentSlidesProgress}%`);
    } else {
      setActiveSlide(0);
      setSlidesProgress('0%');
    }
  };

  const skipStartPage = () => {
    dispatch(setIsStartPage(false));
  };

  return (
    <div className="start-slider">
      <div className="start-slider__images">
        {
          sliderData.map((slide, index) => (
            <img
              key={index}
              className={`start-slider__images-item ${index === activeSlide ? 'active' : ''}`} 
              src={slide.slideImg} 
              alt={`slide ${index}`}/>
          ))
        }
      </div>
      <div className="container">
        <div className="start-slider__content">
          {
            sliderData.map((slide, index) => (
              index === activeSlide ? 
                ( 
                <div 
                  key={index} 
                  className="start-slider__text"
                >
                  <h1 
                    className="start-slider__text-header">
                    {slide.slideHeader}
                  </h1>
                  <h2 className="start-slider__text-semiheader">
                    {slide.slideText}
                  </h2>
                </div>
                ) : ''
              ))
          }

          <div className="start-slider__control">
            <ProgressButton
              action={changeActiveSlide}
              progress={slidesProgress}
            />
          </div>

          <button 
            className="start-slider__skip"
            onClick={() => skipStartPage()}
          >
            skip
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartPageSlider;