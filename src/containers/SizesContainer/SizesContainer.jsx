import { useState } from "react";
import { Sizes } from "../../components/Sizes/Sizes";
import { useParams } from "react-router-dom";
import { useCallback } from "react";
import { basketSlice } from "../../store/ui";
export const SizesContainer = ({ sizes, price }) => {
  const { sneakerPairId } = useParams();
  return <Sizes sizes={sizes} sneakerPairId={sneakerPairId} price={price} />;
};
