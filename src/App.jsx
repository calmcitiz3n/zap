import { Provider } from "react-redux";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { LoginPage } from "../../../react/react-2022-06-28/src/pages/BasketPage/BasketPage";
import { BasketPage } from "../../../react/react-2022-06-28/src/pages/BasketPage/BasketPage";
import { SneakersPage } from "./pages/SneakersPage/SneakersPage";
// import { SneakerPage } from "./pages/SneakerPage/SneakerPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
export const App = () => {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route index path="sneakers" element={SneakersPage} />
          {/* <Route path="basket" element={BasketPage} /> */}
          {/* <Route path="login" element={LoginPage} /> */}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
