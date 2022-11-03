import { sneakerSlice } from "..";
import { selectSneakersIds } from "../selectors";
import { selectLoadingStatus } from "../selectors";

export const loadSneakersIfNotExist = () => (dispatch, getState) => {
  const state = getState();
  if (
    selectSneakersIds(state)?.length !== 0 ||
    selectLoadingStatus(state) === "start"
  ) {
    return;
  }
  //  Проверка на то, есть ли в стейте данные
  dispatch(sneakerSlice.actions.startLoading());
  fetch("http://localhost:3001/api/sneakers/")
    .then((res) => res.json())
    .then((sneakers) => {
      dispatch(sneakerSlice.actions.finishLoading({ sneakers }));
    })
    .catch((error) => {
      console.log(error);
      dispatch(sneakerSlice.actions.failedLoading());
    });
};
//Закончить логику
