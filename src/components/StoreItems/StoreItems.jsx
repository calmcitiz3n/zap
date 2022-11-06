import { StoreItemContaier } from "../../containers/StoreItemContaier/StoreItemContaier";
import styles from "./styles.module.css";
import React, { Component } from "react";
import { nanoid } from "nanoid";
export const StoreItems = ({ brandSneakers }) => {
  return (
    <div className={styles.root}>
      {brandSneakers.map((id) => (
        <StoreItemContaier id={id} key={id} />
      ))}
    </div>
  );
};
