import { SneakersContainer } from "../../containers/SneakersContainer/SneakersContainer";
import styles from "./styles.module.css";
import React from "react";
import { store } from "../../store";
import { BrandTabsContainer } from "../../containers/BrandTabsContainer/BrandTabsContainer";
export const Store = () => {
  return (
    <div className={styles.root}>
      <h1>THE BEST SNEAKERS</h1>
      <BrandTabsContainer />
      <div>
        {/* <Filter /> */}
        {/* <Store /> */}
      </div>
    </div>
  );
};
