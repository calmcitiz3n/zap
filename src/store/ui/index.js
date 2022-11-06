import { createSlice } from "@reduxjs/toolkit";
export const initialState = {
  entities: {},
  ids: [],
};
const SLICE_NAME = "basket";
export const basketSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const sneakerPairId = action.payload.sneakerPairId;
      const size = action.payload.selectSize || action.payload.size;
      const price = action.payload.price;
      if (!sneakerPairId || !size || !price) {
        console.log(`${sneakerPairId} or ${size} is underfined`);
        return state;
      }

      if (state.entities?.[sneakerPairId]) {
        const pairs = state.entities[sneakerPairId];
        let pair = pairs.find((pair) => pair?.size === size);
        if (pair) {
          pair.count = pair.count + 1;
          return state;
        }

        console.log(pairs);
        const data = { size: size, count: 1, price };
        state.entities[sneakerPairId].push(data);
        console.log("!1111");
        return state;
      }
      //Создаем массив для хранения информациz
      state.entities[sneakerPairId] = new Array();
      const data = { size: size, count: 1, price };
      state.entities[sneakerPairId].push(data);
      state.ids.push(sneakerPairId);
      return state;
    },
    removeProduct: (state, action) => {
      const sneakerPairId = action.payload.sneakerPairId;
      const size = action.payload.size;
      const pairs = state.entities[sneakerPairId];
      if (!sneakerPairId || !size || sneakerPairId === 0) {
        console.log(`${sneakerPairId} or ${size} is underfined`);
        return state;
      }
      const pair = pairs.find((elem) => elem.size === size);
      const pairIndex = pairs.findIndex((elem) => elem.size === size);
      if (pair && pair?.count > 1) {
        pair.count = pair.count - 1;
        return state;
      }
      state.entities[sneakerPairId].splice(pairIndex, 1);

      return state;
      // state.entities[sneakerPairId].find((elem) => {
      //   if (elem?.[size] === size) {
      //     elem.count = elem.count - 1;
      //     return state;
      //   }
      // });
      // state[productId]?.count = state[productId]?.count - 1;
    },
    cleanBasket: () => {},
    cleanElement: (state, action) => {
      const sneakerPairId = action.payload.sneakerPairId;
      const size = action.payload.size;
      const pairs = state.entities;
      if (!sneakerPairId || !size) {
        console.log(`${sneakerPairId} or ${size} is underfined`);
        return state;
      }
      const pairIndex = pairs[sneakerPairId].findIndex(
        (elem) => elem.size === size
      );
      state.entities[sneakerPairId].splice(pairIndex, 1);
      return state;
    },
  },
});
