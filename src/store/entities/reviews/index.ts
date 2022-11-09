import { createSlice, PayloadAction } from "@reduxjs/toolkit";
enum statusType {
  idle = "idle",
  finish = "finish",
  start = "start",
  failed = "failed",
}
type initialStateType = {
  entities: {};
  ids: [];
  status: any;
};
type Review = {
  id: string;
  userId: string;
  text: string;
  rating: number;
  createdAt: string;
  updatedAt: string;
};
type Action = {
  payload: Payload[];
  type: string;
};
type Payload = Record<string, Review>;
export const initialState: initialStateType = {
  entities: {},
  ids: [],
  status: statusType.idle,
};
const SLICE_NAME = "brand";
export const brandSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    finishLoading: (state, action: PayloadAction<Review[]>) => {
      if (!action.payload.length) {
        return state;
      }
      const acc: Payload = {};
      // const ids: string[] = [];
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
