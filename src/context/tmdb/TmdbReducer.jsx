const tmdbReducer = (state, action) => {
  switch (action.type) {
    case 'GET_SWIPER':
      return {
        ...state,
        swiper: action.payload,
      };
    case 'SEARCH':
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};

export default tmdbReducer;
