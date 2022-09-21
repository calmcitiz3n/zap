const rootReducer = (state = {}, action = {}) => ({
  entities: entitiesReducer(state.entities, action),
  ui: uiReducer(state.ui, action),
});
