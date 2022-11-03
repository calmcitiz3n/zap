import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import "./fonts/roboto/Roboto-Bold.ttf";
import "./fonts/roboto/Roboto-Medium.ttf";
import "./fonts/roboto/Roboto-Regular.ttf";
import "./fonts/soulmaze/soulmaze-regular.woff";
import { Provider } from "react-redux";
import { store } from "./store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
