import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  entities: {},
  ids: [],
  status: "idle",
};
const SLICE_NAME = "users";
export const userSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    finishLoading: (state, action) => {
      const users = action.payload;
      console.log(users);
      state.entities = users.reduce((acc, user) => {
        const id = user?.id;
        acc[id] = user;
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
