import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  entities: {},
  ids: [],
  status: "idle",
};
const SLICE_NAME = "user";
export const userSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    finishLoading: (state, action) => {
      const users = action.payload.users;
      state.entities = users.reduce((acc, user) => {
        acc[user] = user;
        return acc;
      }, {});
      state.ids = users.map(({ id }) => id);
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
