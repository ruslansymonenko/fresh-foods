import SuggestionsSlider from '../../components/SuggestionsSlider/SuggestionsSlider';

import './HomePageSuggestions.scss';

import colaImg from '../../assets/suggestions-images/cola.png';
import iceCreamImage from '../../assets/suggestions-images/icecreame.png';
import sandwichImage from '../../assets/suggestions-images/sandwich.png';

const HomePageSuggestions = () => {
  //later this information should be received from the server
  const suggetstions = [
    {
      id: 1,
      name: 'Cola',
      photo: colaImg,
      description: 'Fresh cola',
      price: 2,
      currency: '$',
      category: 'drink',
      discount: false,
      grade: 5,
      cookingTime: '1s',
    },
    {
      id: 2,
      name: 'Icecream',
      photo: iceCreamImage,
      description: 'Icecream with strawberries',
      price: 5,
      currency: '$',
      category: 'dessert',
      discount: false,
      grade: 4.6,
      cookingTime: '2m',
    },
    {
      id: 3,
      name: 'Ham sandwich',
      photo: sandwichImage,
      description: 'Sandwich with ham, potatoes and chese',
      price: 10,
      currency: '$',
      category: 'snacks',
      discount: false,
      grade: 4.8,
      cookingTime: '5m',
    }
  ];


  return (
    <div className="home-suggestions">
      <h3 className="home-suggestions__title">
        Perhaps you would like to add to the order? 
      </h3>
      <div className="home-suggestions__slider">
        <SuggestionsSlider
          suggestions={suggetstions}
        />
      </div>
    </div>
  );
};

export default HomePageSuggestions;