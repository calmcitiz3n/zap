import styles from "./styles.module.css";
import { Size } from "../Size/Size";
import { useCallback, useState } from "react";
import { SizeContainer } from "../../containers/SizeContainer/SizeContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { basketSlice } from "../../store/ui";
import { nanoid } from "@reduxjs/toolkit";
export const Sizes = ({ sizes, sneakerPairId, price }) => {
  const [selectSize, setSelectSize] = useState("");
  const dispatch = useDispatch();
  const addToBasket = useCallback(
    (size) => {
      setSelectSize(size);
      dispatch(basketSlice.actions.addProduct({ size, sneakerPairId, price }));
    },
    [selectSize, sneakerPairId]
  );
  useEffect(() => {
    console.log("reset");
    setSelectSize("");
  }, []); //Обновление selectSize до нуля
  if (!sizes) {
    console.log(`sizes if ${sizes}`);
    return null;
  }

  return (
    <div className={styles.root}>
      <div className={styles.sizes}>
        {sizes.map((size) => (
          <SizeContainer
            size={size}
            key={size}
            selectSize={setSelectSize}
            addToBasket={addToBasket}
          />
        ))}
      </div>

      {/* <button onClick={addToBasket} className={styles.button}>
        <span>Купить {selectSize || ""}</span>
      </button> */}
    </div>
  );
};
