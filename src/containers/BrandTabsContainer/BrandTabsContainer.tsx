import { ReactElement } from "react";
import { useSelector } from "react-redux";
import { selectBrandsIds } from "../../store/entities/brands/selectors";
import React from "react";
import { BrandTabs } from "../../components/BrandTabs/BrandTabs";
export const BrandTabsContainer = () => {
  const brandIds: string[] = useSelector((state) => selectBrandsIds(state));
  return <BrandTabs brandIds={brandIds} />;
};
