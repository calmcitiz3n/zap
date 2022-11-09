import { NavLink } from "react-router-dom";
import React, { Component } from "react";
import styles from "./styles.module.scss";
interface CardProps {
  name: string;
  brandId: string;
}
export const BrandTab = ({ name, brandId }: CardProps) => {
  return (
    <NavLink className={styles.tab} to={brandId}>
      {name}
    </NavLink>
  );
};
