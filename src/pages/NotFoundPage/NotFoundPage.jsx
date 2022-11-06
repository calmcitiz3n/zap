import { Layout } from "../../components/Layout/Layout";
import styles from "./styles.module.css";
export const NotFoundPage = () => {
  return (
    <Layout>
      <div className={styles.root}>
        <span className={styles.text}>PAGE NOT FOUND. SORRY, DUDE</span>
      </div>
    </Layout>
  );
};
