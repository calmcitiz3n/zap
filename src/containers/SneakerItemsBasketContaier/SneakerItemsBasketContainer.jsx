import { selectBasketIds } from "../../store/ui/basket/selectors";
import { SneakerItemsBasket } from "../../components/SneakerItemsBasket/SneakerItems";
import { useSelector } from "react-redux";
import { selectBasketTotalPrice } from "../../store/ui/basket/selectors";
import React from "react";
export const SneakerItemsBasketContainer = () => {
  const sneakerIds = useSelector((state) => selectBasketIds(state));
  const totalPrice = useSelector(selectBasketTotalPrice()).toLocaleString("ru");
  return <SneakerItemsBasket sneakerIds={sneakerIds} totalPrice={totalPrice} />;
};
