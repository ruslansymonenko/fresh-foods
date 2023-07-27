import { createSlice } from '@reduxjs/toolkit';

export const orderSlice = createSlice({
  name: 'order',
  initialState: {
    orderAmount: 0,
    goodsInCart: 0,
    orderedGoods: [],
    discount: false,
  },
});



export default orderSlice.reducer;