import { createSlice } from "@reduxjs/toolkit";
export const initialState = {
  entities: {},
  ids: [],
  status: "idle",
};

const SLICE_NAME = "sneaker";
export const sneakerSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    finishLoading: (state, action) => {
      const sneakers = action.payload;
      state.entities = sneakers.reduce((acc, sneaker) => {
        acc[sneaker.id] = sneaker;
        return acc;
      }, {});
      state.ids = sneakers.map(({ id }) => id);
      state.status = "finish";
      return state;
    },
    startLoading: (state) => {
      state.entities = {};
      state.ids = [];
      state.status = "start";
      return state;
    },
    failedLoading: (state) => {
      state.entities = {};
      state.ids = [];
      state.status = "failed";
      return state;
    },
  },
});
