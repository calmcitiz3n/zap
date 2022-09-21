import Login from "./icn/login.png";
import Basket from "./icn/basket.png";
import Logo from "./img/logo.png";
import styles from "./styles.module.css";
export const Header = () => {
  return (
    <div className={styles.root}>
      {Logo}
      <div className={styles.icons}>
        <div className={styles.icon}>{Login}</div>
        <div className={styles.icon}>{Basket}</div>
      </div>
    </div>
  );
};
