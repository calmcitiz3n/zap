import { configureStore, createStore } from "@reduxjs/toolkit";
import { entitiesReducer } from "./entities/reducer";
import { uiReducer } from "./ui/basket/reducer";

const rootReducer = (state = {}, action = {}) => ({
  entities: entitiesReducer(state.entities, action),
  ui: uiReducer(state.ui, action),
});
// export const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
//   devTools: process.env.NODE_ENV !== "production",
// });
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
  devTools: process.env.NODE_ENV !== "production",
});
