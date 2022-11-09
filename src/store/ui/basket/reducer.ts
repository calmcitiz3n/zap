import { basketSlice } from "..";
import { Sneakers, PayloadBasket } from "../type/type";
export type StateBasket = {
  basket: Record<string, Sneakers[]>;
  ids: string[];
};
export type Action = {
  payload: PayloadBasket[];
  type: string;
};
export const uiReducer = (state: StateBasket, action: Action) => ({
  basket: basketSlice.reducer(state.basket, action),
});
