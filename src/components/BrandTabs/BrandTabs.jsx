import { BrandTabContainer } from "../../containers/BrandTabContainer/BrandTabContainer";
import styles from "./styles.module.css";
import { store } from "../../store";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
export const BrandTabs = ({ brandIds }) => {
  if (!brandIds) {
    return null;
  }

  return (
    <div className={styles.root}>
      {brandIds.map((id) => (
        <BrandTabContainer key={id} id={id} />
      ))}
    </div>
  );
};
