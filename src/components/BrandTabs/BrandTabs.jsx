import { BrandTabContainer } from "../../containers/BrandTabContainer/BrandTabContainer";
import styles from "./styles.module.css";
import { store } from "../../store";
export const BrandTabs = ({ brandIds }) => {
  if (!brandIds) {
    return null;
  }

  return (
    <div className={styles.root}>
      {brandIds.map((brandId) => (
        <Link to={brandId}>
          <BrandTabContainer id={brandId} />
        </Link>
      ))}
    </div>
  );
};
