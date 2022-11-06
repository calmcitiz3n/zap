import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectBrandsEntities,
  selectBrandsIds,
  selectBrandsModule,
} from "../../store/entities/brands/selectors";
import React, { Component } from "react";
import { loadBrandsIfNotExist } from "../../store/entities/brands/thunk/loadBrandsIfNotExist";
import { BrandTabs } from "../../components/BrandTabs/BrandTabs";
import { store } from "../../store";
import { loadSneakersIfNotExist } from "../../store/entities/sneakers/thunk/loadSneakersIfNotExist";
export const BrandTabsContainer = () => {
  const brandIds = useSelector((state) => selectBrandsIds(state));
  return <BrandTabs brandIds={brandIds} />;
};
