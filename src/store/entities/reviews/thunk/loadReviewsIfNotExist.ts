import { selectLoadingStatus, selectReviewsIds } from "../selectors";
import axios from "axios";
import { Action } from "store/entities/types/types";
export const loadReviewsIfNotExist = () => async (dispatch<Action>, getState ) => {
  const state = getState();
  if (
    selectReviewsIds(state)?.length !== 0 ||
    selectLoadingStatus(state) === "start"
  ) {
    console.log("!!!!!!!");
    return;
  } //В проверку мы достаём из стора с помощью селекторов сущности. если он пустой, то работаем дальше. Иначе return
  dispatch(reviewSlice.actions.startLoading());
  const response = await axios.get("http://localhost:3001/api/reviews/");
  if (!response) {
    dispatch(reviewSlice.actions.failedLoading());
    throw new Error("Не удалось получить отзывы");
  }
  console.log("response.data", response.data);
  dispatch(reviewSlice.actions.finishLoading(response.data));
};
