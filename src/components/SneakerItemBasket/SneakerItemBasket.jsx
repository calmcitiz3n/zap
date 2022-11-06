import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { basketSlice } from "../../store/ui";
import { Link } from "react-router-dom";
import { uiReducer } from "../../store/ui/basket/reducer";
import styles from "./styles.module.css";
import clean from "./img/clean.png";
export const SneakerItemBasket = ({
  size,
  count,
  name,
  image,
  sneakerPairId,
  price,
  brand,
}) => {
  const dispatch = useDispatch();
  const increment = useCallback(() =>
    dispatch(basketSlice.actions.removeProduct({ sneakerPairId, size, price }))
  );
  const decrement = useCallback(() =>
    dispatch(basketSlice.actions.addProduct({ sneakerPairId, size, price }))
  );
  const cleanElement = useCallback(() =>
    dispatch(basketSlice.actions.cleanElement({ sneakerPairId, size }))
  );
  return (
    <Link
      to={`../sneakers/${sneakerPairId}`}
      style={{ textDecoration: "none" }}
    >
      <div className={styles.root}>
        <div className={styles.image}>
          <img src={image} alt="" />
        </div>
        <div className={styles.container}>
          <div className={styles.name}>{name}</div>
          <div className={styles.brand}>{brand}</div>

          <div className={styles.countAndSize}>
            <div className={styles.count}>
              <button onClick={increment} className={styles.button}>
                -
              </button>
              <div className={styles.count}>{count}</div>
              <button onClick={decrement} className={styles.button}>
                +
              </button>
            </div>
            <div className={styles.size}>{size}</div>
          </div>
        </div>
        <div className={styles.price}>{price * count} ₽ </div>
        <div className={styles.clean} onClick={cleanElement}>
          <img src={clean} alt="" className={styles.cleanIcon} />
        </div>
      </div>
    </Link>
  );
};
