import { sneakerSlice } from "..";
import { selectSneakersIds } from "../selectors";
import { selectLoadingStatus } from "../selectors";
import { http } from "../../../../shared/http";
import axios from "axios";
export const loadSneakersIfNotExist = () => async (dispatch, getState) => {
  const state = getState();
  if (
    selectSneakersIds(state)?.length !== 0 ||
    selectLoadingStatus(state) === "start"
  ) {
    return;
  }
  //  Проверка на то, есть ли в стейте данные
  dispatch(sneakerSlice.actions.startLoading());
  const response = await axios.get("http://localhost:3001/api/sneakers/");
  if (!response) {
    dispatch(sneakerSlice.actions.failedLoading());
    throw new Error("Не удалось получить кроссовки");
  }
  dispatch(sneakerSlice.actions.finishLoading(response.data));
};
// axios({
//   url: ""http://localhost:3001/api/sneakers/""
// })
//     .then((res) => res.json())
//     .then((sneakers) => {
//       dispatch(sneakerSlice.actions.finishLoading({ sneakers }));
//     })
//     .catch((error) => {
//       console.log(error);
//       dispatch(sneakerSlice.actions.failedLoading());
//     });
// };
//Закончить логику
