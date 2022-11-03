import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  entities: {},
  ids: [],
  status: "idle",
};
const SLICE_NAME = "brand";
export const brandSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    finishLoading: (state, action) => {
      const brands = action.payload.brands;
      state.entities = brands.reduce((acc, brand) => {
        acc[brand.id] = brand;
        return acc;
      }, {});
      state.ids = brands.map(({ id }) => id);
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
