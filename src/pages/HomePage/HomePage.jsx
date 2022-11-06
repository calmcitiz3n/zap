import { Link } from "react-router-dom";
import { Layout } from "../../components/Layout/Layout";
import styles from "./styles.module.css";
export const HomePage = () => {
  return (
    <Layout>
      <Link to="store" className={styles.store}>
        STORE
      </Link>
      ;
    </Layout>
  );
};
