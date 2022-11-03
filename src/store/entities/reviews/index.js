import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  entities: {},
  ids: [],
  status: "idle",
};
const SLICE_NAME = "review";
export const reviewSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    finishLoading: (state, action) => {
      const reviews = action.payload.reviews;
      state.entities = reviews.reduce((acc, review) => {
        acc[review] = review;
        return acc;
      }, {});
      state.ids = reviews.map(({ id }) => id);
      state.status = "finish";
    },
    startLoading: (state) => {
      state.entities = {};
      state.ids = [];
      state.status = "start";
    },
    failedLoading: (state) => {
      state.entities = {};
      state.ids = [];
      state.status = "failed";
    },
  },
});
