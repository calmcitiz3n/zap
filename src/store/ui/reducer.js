import { basketSlice } from ".";
export const uiReducer = (state = {}, action) => ({
  basket: basketSlice.reducer(state.basket, action),
});
