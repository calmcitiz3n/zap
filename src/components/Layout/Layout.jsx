import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import styles from "./styles.module.css";
export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className={styles.main}>{children}</div>
      <Footer />
    </>
  );
};
