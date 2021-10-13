// @ts-nocheck
export default function categoryReducer(state, action) {
  switch (action.type) {
    case "ADD_CATEGORIES":
      return addCategories(state, action);
    case "EDIT_CATEGORIES":
      return editCategories(state, action);
    case "SET_CATEGORIES":
      return setCategories(action);
    default:
      throw new Error(`No action type found ${action.type}`);
  }
}
function addCategories(state, action) {
  const { payload } = action;

  if (payload !== null) return [...state, payload];
  return state;
}
function setCategories(action) {
  const { payload } = action;

  return payload;
}