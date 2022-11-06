import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  entities: {},
  ids: [],
  status: "idle",
};
const SLICE_NAME = "reviews";
export const reviewSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    finishLoading: (state, action) => {
      const reviews = action.payload;
      console.log(reviews);
      state.entities = reviews.reduce((acc, review) => {
        const id = review?.id;
        acc[id] = review;
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
