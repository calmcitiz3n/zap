import { useSelector } from "react-redux";
import React from "react";
import { selectBrandByIdName } from "../../store/entities/brands/selectors";
import { BrandTab } from "../../components/BrandTab/BrandTab";
import { useParams } from "react-router-dom";
interface BrandTabContainerProps {
  id: string;
}

export const BrandTabContainer = ({ id }: BrandTabContainerProps) => {
  const name: string = useSelector((state) =>
    selectBrandByIdName(state, { id })
  );
  return <BrandTab name={name} brandId={id} />;
};
