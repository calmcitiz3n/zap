import { selectEntitiesModule } from "../selectors";

export const selectUsersModule = (state) => selectEntitiesModule(state)?.users;
export const selectUsersEntities = (state) =>
  selectUsersModule(state)?.entities;
export const selectUsersIds = (state) => selectUsersModule(state)?.ids;
export const selectUserById = (state, { id }) =>
  selectUsersEntities(state)[id]?.name;
export const selectLoadingStatus = (state) => selectUsersModule(state)?.status;
export const selectInterviewerDataByInterviewerId = (state, { userId }) =>
  selectUsersEntities(state).find((user) => user?.userId === userId);
