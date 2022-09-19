import styles from "./styles.module.css";
export const StoreContainer = () => {
  return (
    <div className={styles.root}>
      <h1>THE BEST SNEAKERS</h1>
      <BrandTabsContianer />
      <div>
        <Filter />
        <SneakersContainer />
      </div>
    </div>
  );
};
