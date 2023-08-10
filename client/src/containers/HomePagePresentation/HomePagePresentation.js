import PresentationSlider from '../../components/PresentationSlider/PresentationSlider';

import './HomePagePresentation.scss';

import sliderImage1 from '../../assets/home-page-presentation/salad.png';
import sliderImage2 from '../../assets/home-page-presentation/pizza.png';
import sliderImage3 from '../../assets/home-page-presentation/salmon-salad.png';

const HomePagePresentation = () => {

  const dataForSlider = [
    { 
      id: 1,
      title: 'Salad',
      image: sliderImage1,
      grade: '4.5',
      cookingTime: '10 - 15 m',
    },
    { 
      id: 2,
      title: 'Pizza Margarita',
      image: sliderImage2,
      grade: '4.7',
      cookingTime: '15 - 20 m',
    },
    { 
      id: 3,
      title: 'Salmon salad',
      image: sliderImage3,
      grade: '4.9',
      cookingTime: '17 m',
    }
  ];

  return (
    <div className="home-presentation">
      <PresentationSlider
        slidesData={dataForSlider}
      />
    </div>
  );
};

export default HomePagePresentation;