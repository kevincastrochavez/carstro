export const initialState = {
  showFilters: false,
  carsResults: [],
  brandsFilters: [],
  modelYearsFilters: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_FILTERS':
      return {
        ...state,
        showFilters: action.showFilters,
      };
    case 'SET_CARS_RESULTS':
      return {
        ...state,
        carsResults: action.carsResults,
      };
    case 'SET_BRANDS_FILTERS':
      return {
        ...state,
        brandsFilters: action.brandsFilters,
      };
    case 'SET_MODEL_YEARS_FILTERS':
      return {
        ...state,
        modelYearsFilters: action.modelYearsFilters,
      };
    default:
      return state;
  }
};

export default reducer;
