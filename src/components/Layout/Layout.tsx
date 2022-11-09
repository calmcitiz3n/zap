import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import styles from "./styles.module.scss";
interface LayoutProps {
  children: React.ReactNode;
}
export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.root}>
      <Header />
      <div className={styles.main}>{children}</div>
      <Footer />
    </div>
  );
};
