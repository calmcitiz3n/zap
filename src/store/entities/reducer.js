import { brandSlice } from "./brands";
import { reviewSlice } from "./reviews";
import { sneakerSlice } from "./sneakers";
import { userSlice } from "./users";

export const entitiesReducer = (state = {}, action) => ({
  brands: brandSlice.reducer(state.brands, action),
  reviews: reviewSlice.reducer(state.reviews, action),
  sneakers: sneakerSlice.reducer(state.sneakers, action),
  users: userSlice.reducer(state.users, action),
}); //Сюда в виде значений надо написать slice'ы, которые мы создадим в index.js для каждой entities-сущности
