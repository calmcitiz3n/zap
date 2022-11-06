import { NavLink } from "react-router-dom";
import React, { Component } from "react";
import styles from "./styles.module.scss";
export const BrandTab = ({ name, brandId }) => {
  return (
    <NavLink className={styles.tab} to={brandId}>
      {name}
    </NavLink>
  );
};
