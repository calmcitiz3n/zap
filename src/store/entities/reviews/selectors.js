export const selectEntitiesModule = (state) => state.entities;
export const selectReviewsModule = (state) =>
  selectEntitiesModule(state)?.reviews;
export const selectReviewsEntities = (state) =>
  selectReviewsModule(state)?.entities;
export const selectReviewsIds = (state) => selectReviewsModule(state)?.ids;
export const selectReviewsById = (state, { id }) =>
  selectReviewsEntities(state)?.[id];
export const selectReviewsNameById = (state, { id }) =>
  selectReviewsModule(state)[id]?.name;
export const selectLoadingStatus = (state) =>
  selectReviewsModule(state)?.status;
export const selectReviewerIdByReviewId = (state, { id }) =>
  selectReviewsById(state, { id })?.userId;
