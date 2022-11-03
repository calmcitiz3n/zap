import Login from "./icn/login.png";
import Basket from "./icn/basket.png";
import Logo from "./img/logo.png";
import styles from "./styles.module.css";
export const Header = () => {
  return (
    <div className={styles.root}>
      <img src={Logo} alt="logo" className={styles.logo} />
      <div className={styles.icons}>
        <div className={styles.icon}>
          <img src={Login} alt="login" />
        </div>
        <div className={styles.icon}>
          <img src={Basket} alt="basket" />
        </div>
      </div>
    </div>
  );
};
