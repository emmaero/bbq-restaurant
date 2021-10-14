// @ts-nocheck
export default function categoryReducer(state, action) {
  switch (action.type) {
    case "ADD_CATEGORIES":
      return addCategories(state, action);
    case "EDIT_CATEGORIES":
      return editCategories(state, action);
    case "DELETE_CATEGORIES":
      return deleteCategories(state, action);
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
function editCategories(state, action) {
  const { payload } = action;
  const newState = [...state];
  const index = newState.findIndex((item) => item.id === payload.id);
  newState[index] = { ...payload };
  return newState;
}
function deleteCategories(state, action) {
  const { id } = action;
  const newState = [...state];
  const updateState = newState.filter((item) => item.id !== id);
  return updateState;
}
function setCategories(action) {
  const { payload } = action;

  return payload;
}