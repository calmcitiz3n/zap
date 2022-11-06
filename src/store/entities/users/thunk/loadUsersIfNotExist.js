import axios from "axios";
import { userSlice } from "..";
import { selectLoadingStatus, selectUsersIds } from "../selectors";

export const loadUsersIfNotExist = () => async (dispatch, getState) => {
  const state = getState();
  if (
    selectUsersIds(state)?.length !== 0 ||
    selectLoadingStatus(state) === "start"
  ) {
    return;
  } //В проверку мы достаём из стора с помощью селекторов сущности. если он пустой, то работаем дальше. Иначе return
  dispatch(userSlice.actions.startLoading());
  const response = await axios.get("http://localhost:3001/api/users/");
  if (!response) {
    dispatch(userSlice.actions.failedLoading());
  }
  dispatch(userSlice.actions.finishLoading(response.data));
};
