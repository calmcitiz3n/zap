import styles from "./styles.module.scss";
import closeIcon from "./icn/close.png";
import classNames from "classnames";
import CSSTransition from "react-transition-group/CSSTransition";
type DeliveryAndPaymentProps = {
  activePopUp: boolean;
  setActivePopUp: React.Dispatch<React.SetStateAction<boolean>>;
  classname: string;
};
// interface setActivePopUpData
export const DeliveryAndPayment = ({
  activePopUp,
  setActivePopUp,
  classname,
}: DeliveryAndPaymentProps) => {
  return (
    <CSSTransition
      in={activePopUp}
      timeout={200}
      classNames={styles}
      unmountOnExit
    >
      <div
        className={classNames(styles.root, classname)}
        onClick={() => setActivePopUp(false)}
      >
        <div className={styles.text} onClick={(e) => e.stopPropagation()}>
          <img
            src={closeIcon}
            alt=""
            onClick={() => {
              console.log("click");
              setActivePopUp(false);
            }}
            className={styles.icon}
          />
          <h6 className={styles.title}>Доставка и оплата</h6>
          <h5 className={styles.deliveryTypeHeader}>ДОСТАВКА ПО МОСКВЕ</h5>
          <ul className={styles.block}>
            <li>
              При покупке от 15000 рублей - бесплатная доставка курьером по
              Москве
            </li>
            <li>
              Курьером по Москве (стоимость 350 рублей, срок доставки 1-3 дня,
              примерка)
            </li>
            <li>
              Курьером СДЭК по Москве, в пределах МКАД (стоимость 350 рублей,
              срок доставки 2-3 дня, примерка)
            </li>
            <li>
              Курьером до метро за МКАД (стоимость 350 рублей, срок доставки 1-3
              дня, примерка)
            </li>
            <li>
              Курьером СДЭК за МКАД (стоимость 600 рублей, срок доставки
              ориентировочно 3-4 рабочих дня, примерка)
            </li>
            <li></li>
          </ul>
          <h5 className={styles.deliveryTypeHeader}>ДОСТАВКА ПО РОССИИ</h5>
          <ul className={styles.block}>
            <li>
              При покупке от 8000 рублей - бесплатная доставка Почтой России
            </li>
            <li>
              Почта России (стоимость – 490 рублей, ориентировочно 4-14 рабочих
              дней)
            </li>
            <li>
              Курьерская служба СДЭК (стоимость - 690 рублей, ориентировочно 2-5
              рабочих дней)
            </li>
            <li>
              EMS Почта России (стоимость – 890 рублей, ориентировочно 2-7
              рабочих дней)
            </li>
          </ul>
        </div>
      </div>
    </CSSTransition>
  );
};
