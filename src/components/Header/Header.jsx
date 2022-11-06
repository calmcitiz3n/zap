import Login from "./icn/accountIcon.png";
import Basket from "./icn/basketIcon.png";
import Logo from "./img/logo.png";
import Reviews from "./icn/reviewsIcon.png";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { BasketPage } from "../../pages/BasketPage/BasketPage";
export const Header = () => {
  return (
    <div className={styles.root}>
      <Link to="/store">
        <img src={Logo} alt="logo" className={styles.logo} />
      </Link>

      <div className={styles.icons}>
        <Link to="/login" className={styles.icon}>
          <img src={Login} alt="login" />
        </Link>
        <Link to="/reviews" className={styles.icon}>
          <img src={Reviews} alt="" className={styles.icon} />
        </Link>

        <Link className={styles.icon} to="/basket">
          <img src={Basket} alt="basket" />
        </Link>
      </div>
    </div>
  );
};
