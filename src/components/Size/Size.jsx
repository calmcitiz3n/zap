import styles from "./styles.module.scss";
import classnames from "classnames";
import { useEffect } from "react";
export const Size = ({ size, addToBasket, notify }) => {
  return (
    <button
      name="button"
      className={classnames(styles.sizeButton, {})}
      onClick={() => {
        addToBasket(size);
        notify();
      }}
    >
      {size}
    </button>
  );
};
