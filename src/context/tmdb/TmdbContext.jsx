import { createContext, useState, useReducer } from 'react';
import tmdbReducer from './TmdbReducer';

const TmdbContext = createContext();

const TMDB_KEY = import.meta.env.VITE_TMDB_KEY;
const TMDB_URL = import.meta.env.VITE_TMDB_URL;

export const TmdbProvider = ({ children }) => {
  const initialState = {
    swiper: [],
  };

  const [state, dispatch] = useReducer(tmdbReducer, initialState);

  const fetchAPI = async () => {
    const response = await fetch(
      `${TMDB_URL}movie/now_playing?api_key=${TMDB_KEY}&language=en-US`
    );

    const { results } = await response.json();

    dispatch({
      type: 'GET_SWIPER',
      payload: results,
    });
  };

  return (
    <TmdbContext.Provider value={{ swiperData: state.swiper, fetchAPI }}>
      {children}
    </TmdbContext.Provider>
  );
};

export default TmdbContext;
