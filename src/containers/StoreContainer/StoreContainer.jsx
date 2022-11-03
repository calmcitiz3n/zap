import styles from "./styles.module.css";
import React from "react";
import { useEffect } from "react";
import { loadSneakersIfNotExist } from "../../store/entities/sneakers/thunk/loadSneakersIfNotExist";
import { Store, StoreWithMemo } from "../../components/Store/Store";
import { useDispatch, useSelector } from "react-redux";
import { loadBrandsIfNotExist } from "../../store/entities/brands/thunk/loadBrandsIfNotExist";
import {
  selectBrandsIds,
  selectLoadingStatus,
} from "../../store/entities/brands/selectors";
export const StoreContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadFunction = loadBrandsIfNotExist();
    dispatch(loadFunction);
  });
  useEffect(() => {
    const loadFunction = loadSneakersIfNotExist();
    dispatch(loadFunction);
  });
  return <Store />;
};
