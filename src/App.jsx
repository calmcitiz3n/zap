import { Provider } from "react-redux";
import "./App.scss";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SneakersStorePage } from "./pages/SneakersStorePage/SneakersStorePage";
import { StoreItems } from "./components/StoreItems/StoreItems";
import { StoreItemsContainer } from "./containers/StoreItemsContainer/StoreItemsContainer";
import { HomePage } from "./pages/HomePage/HomePage";
import { BasketPage } from "./pages/BasketPage/BasketPage";
import { SneakerPage } from "./pages/SneakerPage/SneakerPage";
// import { SneakerPage } from "./pages/SneakerPage/SneakerPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { ReviewsPage } from "./pages/ReviewsPage/ReviewsPage";
export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="store" element={<SneakersStorePage />}>
          <Route path=":brandId" element={<StoreItemsContainer />}></Route>
        </Route>
        <Route path="sneakers/:sneakerPairId" element={<SneakerPage />}></Route>
        <Route path="basket" element={<BasketPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="reviews" element={<ReviewsPage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
