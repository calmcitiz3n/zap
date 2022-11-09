import { configureStore, createStore } from "@reduxjs/toolkit";
import { entitiesReducer } from "./entities/reducer";
import { uiReducer } from "./ui/basket/reducer";
import { Entities } from "./entities/reducer";
import { Ui } from "./ui/type/type";
type Payload = Record<string, any>;
type Action = {
  payload: Payload[];
  type: string;
};
type State = {
  entities: Entities;
  ui: Ui;
};
const rootReducer = (state: State, action: Action) => ({
  entities: entitiesReducer(state.entities, action),
  ui: uiReducer(state.ui, action),
});
// export const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
//   devTools: process.env.NODE_ENV !== "production",
// });
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
  devTools: process.env.NODE_ENV !== "production",
});
export default store;
export type RootState = ReturnType<typeof store.getState>; //нужен для корректной работы с хуками
export type AppDispatch = typeof store.dispatch; //нужен для корректной работы с хуками
