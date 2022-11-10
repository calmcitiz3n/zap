import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as uuid from "uuid";
import {
  selectBrandsEntities,
  selectBrandsIds,
  selectBrandsModule,
} from "../../store/entities/brands/selectors";
import React from "react";

import { BrandTabs } from "../../components/BrandTabs/BrandTabs";

export const BrandTabsContainer = () => {
  const brandIds = useSelector((state) => selectBrandsIds(state));
  for (let i = 0; i <= 25; i++) {
    console.log(uuid.v4());
  }

  return <BrandTabs brandIds={brandIds} />;
};
