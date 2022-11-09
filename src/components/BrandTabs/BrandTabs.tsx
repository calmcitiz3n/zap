import { BrandTabContainer } from "../../containers/BrandTabContainer/BrandTabContainer";
import styles from "./styles.module.scss";
import React from "react";
interface BrandTabsProps {
  brandIds: string[];
}
export const BrandTabs = ({ brandIds }: BrandTabsProps) => {
  if (!brandIds) {
    return null;
  }
  return (
    <div className={styles.root}>
      {brandIds.map((id: string) => (
        <BrandTabContainer key={id} id={id} />
      ))}
    </div>
  );
};
