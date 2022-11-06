import { useSelector } from "react-redux";
import { selectSneakersById } from "../../store/entities/sneakers/selectors";
import { StoreItem } from "../../components/StoreItem/StoreItem";
import { Link } from "react-router-dom";
import React, { Component } from "react";
export const StoreItemContaier = ({ id }) => {
  const sneakersPair = useSelector((state) =>
    selectSneakersById(state, { id })
  );
  if (!sneakersPair) {
    console.log(`Error: sneakersPair is ${sneakersPair}`);
    return null;
  }
  const sneakerPairId = sneakersPair?.id;
  return (
    <StoreItem sneakersPair={sneakersPair} sneakerPairId={sneakerPairId} />
  );
};
