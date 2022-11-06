import axios from "axios";
import { sneakerSlice } from "..";
import { selectSneakersById } from "../selectors";

export const loadSneakersByIdIfNotExist =
  ({ id }) =>
  async (dispatch, getState) => {
    const state = getState();
    if (selectSneakersById(state, { id })) {
      console.log(id);
      return;
    }
    dispatch(sneakerSlice.actions.startLoading());
    const response = await axios.get(
      `http://localhost:3001/api/sneakers/?id=${id}`
    );
    if (!response) {
      dispatch(sneakerSlice.actions.failedLoading());
      throw new Error("");
    }
    dispatch(sneakerSlice.actions.finishLoading(response.data));
  };
