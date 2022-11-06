import styles from "./styles.module.css";
import { Sizes } from "../Sizes/Sizes";
import { useState } from "react";
import { SizesContainer } from "../../containers/SizesContainer/SizesContainer";
import { DeliveryAndPayment } from "../DeliveryAndPayment/DeliveryAndPayment";
import { NumberForm } from "../NumberForm/NumberForm";
export const SneakerInfo = ({ sizes, name, image, brand, price }) => {
  const [activePopUp, setActivePopUp] = useState(false);
  const [activeForm, setActiveForm] = useState(false);
  return (
    <div className={styles.root}>
      <div>
        <img src={image} alt="img" className={styles.image} />
      </div>
      <div className={styles.info}>
        <div className={styles.brand}>{brand}</div>
        <div className={styles.name}>{name}</div>
        <div className={styles.price}>{price} P</div>
        <span className={styles.sizes}>Доступные размеры:</span>
        <SizesContainer sizes={sizes} price={price} />
        <DeliveryAndPayment
          activePopUp={activePopUp}
          setActivePopUp={setActivePopUp}
        />
        <button
          onClick={() => {
            setActivePopUp(true);
          }}
          className={styles.button}
        >
          Оплата и доставка
        </button>
        <NumberForm activeForm={activeForm} setActiveForm={setActiveForm} />

        <button
          onClick={() => {
            setActiveForm(true);
          }}
          className={styles.button}
        >
          Заказ по телефону
        </button>
      </div>
    </div>
  );
};
