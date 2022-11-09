import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { statusType, initialStateType, Action, Payload } from "../types/types";
type Brand = {
  id: string;
  name: string;
  assortment: string[];
  createdAt: string;
  updatedAt: string;
};
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
    finishLoading: (state, action: PayloadAction<Brand[]>) => {
      if (!action.payload.length) {
        return state;
      }
      const acc: Payload = {};
      for (const brand of action.payload) {
        acc[brand.id] = brand;
        state.ids.push(brand.id as never);
      }
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
