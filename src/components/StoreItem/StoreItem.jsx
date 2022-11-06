import styles from "./styles.module.css";
import { Link } from "react-router-dom";
export const StoreItem = ({ sneakersPair, sneakerPairId }) => {
  return (
    <div className={styles.root}>
      <div className={styles.imageContainer}>
        <img src={sneakersPair.image} alt="" className={styles.image} />
      </div>
      <div className={styles.brand}>{sneakersPair.brand}</div>
      <div className={styles.name}>{sneakersPair.name}</div>
      <div className={styles.price}>{sneakersPair.price}</div>

      <Link to={`/sneakers/${sneakerPairId}`} className={styles.linkButton}>
        Link
      </Link>
    </div>
  );
};
