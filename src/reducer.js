export const initialState = {
  showFilters: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_FILTERS':
      return {
        showFilters: action.showFilters,
      };
    default:
      return state;
  }
};

export default reducer;
