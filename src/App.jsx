import { Provider } from "react-redux";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SneakersStorePage } from "./pages/SneakersStorePage/SneakersStorePage";
// import { SneakerPage } from "./pages/SneakerPage/SneakerPage";
// import { LoginPage } from "./pages/LoginPage/LoginPage";
export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<SneakersStorePage />}></Route>
        {/* <Route path="basket" element={<BasketPage />} /> */}
        {/* <Route path="login" element={<LoginPage} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
