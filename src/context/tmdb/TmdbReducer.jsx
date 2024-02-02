const tmdbReducer = (state, action) => {
  switch (action.type) {
    case 'GET_SWIPER':
      return {
        ...state,
        swiper: action.payload,
      };
    default:
      return state;
  }
};

export default tmdbReducer;
