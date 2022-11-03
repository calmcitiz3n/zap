import { createSlice } from "@reduxjs/toolkit";
export const initialState = {
  entities: {},
  ids: [],
  status: "idle",
};
const SLICE_NAME = "basket";
export const basketSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    addProduct: (state, action) => {
      // const productId = action.payload.productId;
      // if (!productId) {
      //   return state;
      // }
      // state[productId] = (state[productId] || 0) + 1;
      return state;
    },
    removeProduct: (state, action) => {
      // const productId = action.payload.productId;
      // if (!productId || productId === 0) {
      //   return state;
      // }
      // state[productId] = state[productId] - 1;
      return state;
    },
    clean: () => {},
  },
});
