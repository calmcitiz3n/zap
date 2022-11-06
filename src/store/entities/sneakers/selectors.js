export const selectEntitiesModule = (state) => state.entities;
export const selectSneakersModule = (state) =>
  selectEntitiesModule(state)?.sneakers;
export const selectSneakersEntities = (state) =>
  selectSneakersModule(state)?.entities;
export const selectSneakersIds = (state) => selectSneakersModule(state)?.ids;
export const selectSneakersById = (state, { id }) =>
  selectSneakersEntities(state)?.[id];
export const selectSneakersNameById = (state, { id }) =>
  selectSneakersModule(state)[id]?.name;
export const selectLoadingStatus = (state) =>
  selectSneakersModule(state)?.status;
export const selectSneakersPriceById = (state, { id }) =>
  selectSneakersModule(state)[id]?.price;
export const selectSneakersSizesById = (state, { id }) =>
  selectSneakersById(state, { id })?.sizes;
export const selectSneakersImageById = (state, { id }) =>
  selectSneakersById(state, { id })?.image;
