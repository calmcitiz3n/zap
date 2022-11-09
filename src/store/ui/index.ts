import { createSlice } from "@reduxjs/toolkit";
import { StateBasket } from "./basket/reducer";
import { Ui } from "./type/type";
import { SneakersData } from "./type/type";
export const initialState = {
  basket: {},
  ids: [],
};
const SLICE_NAME = "basket";
export const basketSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    addProduct: (state: StateBasket, action) => {
      const { sneakerPairId, size, price } = action.payload;
      if (!sneakerPairId || !size || !price) {
        console.log(`${sneakerPairId} or ${size} is underfined`);
        return state;
      }
      if (state.basket?.[sneakerPairId]) {
        const pairs = state.basket[sneakerPairId];
        let pair: any = pairs.find((pair) => pair?.size === size);
        if (pair) {
          pair.count = pair.count + 1;
          return state;
        }
        const data: SneakersData = { size: size, count: 1, price: price };
        state.basket[sneakerPairId].push(data);
        return state;
      }
      //Создаем массив для хранения информациz
      state.basket[sneakerPairId] = new Array();
      const data: SneakersData = { size: size, count: 1, price: price };
      state.basket[sneakerPairId].push(data);
      state.ids.push(sneakerPairId);
      return state;
    },
    removeProduct: (state, action) => {
      const sneakerPairId = action.payload.sneakerPairId;
      const size = action.payload.size;
      const pairs = state.basket[sneakerPairId];
      if (!sneakerPairId || !size || sneakerPairId === 0) {
        console.log(`${sneakerPairId} or ${size} is underfined`);
        return state;
      }
      const pair = pairs.find((elem: SneakersData) => elem.size === size);
      const pairIndex = pairs.findIndex(
        (elem: SneakersData) => elem.size === size
      );
      if (pair && pair?.count > 1) {
        pair.count = pair.count - 1;
        return state;
      }
      state.basket[sneakerPairId].splice(pairIndex, 1);

      return state;
    },
    cleanBasket: () => {},
    cleanElement: (state, action) => {
      const sneakerPairId = action.payload.sneakerPairId;
      const size = action.payload.size;
      const pairs = state.basket;
      if (!sneakerPairId || !size) {
        console.log(`${sneakerPairId} or ${size} is underfined`);
        return state;
      }
      const pairIndex = pairs[sneakerPairId].findIndex(
        (elem: SneakersData) => elem.size === size
      );
      state.basket[sneakerPairId].splice(pairIndex, 1);
      return state;
    },
  },
});
