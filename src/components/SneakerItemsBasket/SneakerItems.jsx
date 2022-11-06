import { SneakerItemBasketContainer } from "../../containers/SneakerItemBasketContainer/SneakerItemBasketContainer";
import styles from "./styles.module.css";
import React from "react";
import { useSelector } from "react-redux/es/exports";
import {
  selectBasketTotalPrice,
  selectSneakersBasketCount,
} from "../../store/ui/basket/selectors";
export const SneakerItemsBasket = ({ sneakerIds, totalPrice }) => {
  // const totalPrice = useSelector(selectBasketTotalPrice());
  if (!sneakerIds) {
    return "Sneaker not found!";
  }
  console.log(totalPrice);
  return (
    <div className={styles.root}>
      {sneakerIds.map((sneakerId) => (
        <SneakerItemBasketContainer key={sneakerId} sneakerId={sneakerId} />
      ))}
      <div className={styles.totalPrice}>
        <div className={styles.totalText}>Итого: </div>
        <div className={styles.price}>{totalPrice} P</div>
      </div>
    </div>
  );
};
