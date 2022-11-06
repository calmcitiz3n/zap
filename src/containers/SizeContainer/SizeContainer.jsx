import { Size } from "../../components/Size/Size";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const SizeContainer = ({ size, selectSize, addToBasket }) => {
  const notify = () =>
    toast.success("Товар добавлен в корзину", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  return (
    <>
      <Size
        size={size}
        selectSize={selectSize}
        addToBasket={addToBasket}
        notify={notify}
      />
      <ToastContainer />
    </>
  );
};
