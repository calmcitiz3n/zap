import { SneakersContainer } from "../../containers/SneakersContainer/SneakersContainer";
import styles from "./styles.module.css";
import React from "react";
import classnames from "classnames";
import { store } from "../../store";
import { BrandTabsContainer } from "../../containers/BrandTabsContainer/BrandTabsContainer.tsx";
import { Outlet } from "react-router-dom";

export const Store = () => {
  return (
    <div className={styles.root}>
      <h1 className={classnames(styles.header1)}>THE BEST SNEAKERS</h1>
      <BrandTabsContainer />
      <div>
        {/* <Filter /> */}
        {/* <Store /> */}
      </div>
      <Outlet />
    </div>
  );
};
