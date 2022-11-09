import { selectEntitiesModule } from "../selectors";
export const selectBrandsModule = (state) =>
  selectEntitiesModule(state)?.brands;
export const selectBrandsEntities = (state) =>
  selectBrandsModule(state)?.entities;
export const selectBrandsIds = (state) => selectBrandsModule(state)?.ids;
export const selectBrandById = (state, { id }) =>
  selectBrandsEntities(state)[id];
export const selectBrandByIdName = (state, { id }):string =>
  selectBrandsEntities(state)[id]?.name;

export const selectLoadingStatus = (state) => selectBrandsModule(state)?.status;
export const selectBrandSneakersByBrandId = (state, { brandId }) =>
  selectBrandById(state, { id: brandId })?.assortment;
