import axios from "axios";
import { brandSlice } from "..";
import { selectBrandsIds } from "../selectors";
import { selectLoadingStatus } from "../selectors";
export const loadBrandsIfNotExist = () => (dispatch, getState) => {
  const state = getState();
  if (
    selectBrandsIds(state)?.length !== 0 ||
    selectLoadingStatus(state) === "start"
  ) {
    return;
  }
  dispatch(brandSlice.actions.startLoading());
  const response = axios.get("http://localhost:3001/api/brands/");
  if (!response) {
    dispatch(brandSlice.actions.failedLoading());
    throw new Error("Брендов нет!");
  }
  dispatch(brandSlice.actions.finishLoading(response));
};
