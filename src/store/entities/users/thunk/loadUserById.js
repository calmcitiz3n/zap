import { userSlice } from "../index";
import { selectUserById, selectUsersIds } from "../selectors";

export const loadUserById =
  ({ id }) =>
  (dispatch, getState) => {
    const state = getState();
    if (!selectUsersIds(state)?.find((userId) => userId === id)) {
      return;
    } //В проверку мы достаём из стора с помощью селекторов сущности. если он пустой, то работаем дальше. Иначе return
    dispatch(userSlice.actions.startLoading());
    fetch("http://localhost:3001/api/reviews/")
      .then((res) => res.json())
      .then((reviews) => {
        dispatch(userSlice.actions.finishLoading({ reviews }));
      })
      .catch((err) => {
        console.log(err);
        dispatch(userSlice.actions.failedLoading());
      });
  };
