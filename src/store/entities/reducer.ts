import { brandSlice } from "./brands";
import { reviewSlice } from "./reviews";
import { sneakerSlice } from "./sneakers";
import { userSlice } from "./users";
import { Action } from "../entities/types/types";
export interface Entities {
  brands: {
    entities: {};
    ids: never[];
    status: string;
  };
  reviews: any;
  sneakers: {
    entities: {};
    ids: never[];
    status: string;
  };
  users: any;
} //Потом закинуть в отдельную папку

export const entitiesReducer = (state: Entities, action: Action) => ({
  brands: brandSlice.reducer(state.brands, action),
  reviews: reviewSlice.reducer(state.reviews, action),
  sneakers: sneakerSlice.reducer(state.sneakers, action),
  users: userSlice.reducer(state.users, action),
}); //Сюда в виде значений надо написать slice'ы, которые мы создадим в index.js для каждой entities-сущности
