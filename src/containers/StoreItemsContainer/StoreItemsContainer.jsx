import { selectBrandSneakersByBrandId } from "../../store/entities/brands/selectors";
import { StoreItems } from "../../components/StoreItems/StoreItems";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import React, { Component } from "react";
export const StoreItemsContainer = () => {
  const { brandId } = useParams();
  const brandSneakers = useSelector((state) =>
    selectBrandSneakersByBrandId(state, { brandId })
  );
  if (!brandSneakers) {
    console.log(`Error: brandSneakers is ${brandSneakers}`);
    return null;
  }
  return <StoreItems brandSneakers={brandSneakers} />;
};
