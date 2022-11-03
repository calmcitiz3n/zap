export const selectSneakersModule = (state) => state.sneakers;
export const selectSneakersEntities = (state) =>
  selectSneakersModule(state)?.entities;
export const selectSneakersIds = (state) => selectSneakersModule(state)?.ids;
export const selectSneakerById = (state, { id }) =>
  selectSneakersModule(state)[id]?.name;
export const selectLoadingStatus = (state) =>
  selectSneakersModule(state)?.status;
