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
  fetch("http://localhost:3001/api/brands/")
    .then((res) => res.json())
    .then((brands) => {
      dispatch(brandSlice.actions.finishLoading({ brands }));
    })
    .catch((err) => {
      console.log(err);
      dispatch(brandSlice.actions.failedLoading());
    });
};
