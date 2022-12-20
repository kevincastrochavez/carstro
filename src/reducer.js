export const initialState = {
  showFilters: false,
  carsResults: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_FILTERS':
      return {
        showFilters: action.showFilters,
      };
    case 'SET_CARS_RESULTS':
      return {
        carsResults: action.carsResults,
      };
    default:
      return state;
  }
};

export default reducer;
