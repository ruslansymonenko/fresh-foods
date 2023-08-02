import { createSlice } from '@reduxjs/toolkit';


//later this information should be received from the server
const suggetstions = [
  {
    id: 1,
    name: 'Cola',
    photo: '',
    description: 'Fresh cola',
    price: 2,
    category: 'drink',
    discount: false,
    grade: 5,
    cookingTime: '1s',
  },
  {
    id: 2,
    name: 'Icecream',
    photo: '',
    description: 'Icecream with strawberries',
    price: 5,
    category: 'dessert',
    discount: false,
    grade: 4.6,
    cookingTime: '2m',
  },
  {
    id: 3,
    name: 'Ham sandwich',
    photo: '',
    description: 'Sandwich with ham, potatoes and chese',
    price: 10,
    category: 'snacks',
    discount: false,
    grade: 4.8,
    cookingTime: '5m',
  }
];

export const suggestionSlice = createSlice({
  name: 'suggestions',
  initialState: {
    orderSuggestions: suggetstions,
  },
});