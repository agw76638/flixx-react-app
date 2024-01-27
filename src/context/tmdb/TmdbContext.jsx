import { createContext, useState } from 'react';

const TmdbContext = createContext();

const TMDB_KEY = import.meta.env.VITE_TMDB_KEY;
const TMDB_URL = import.meta.env.VITE_TMDB_URL;

export const TmdbProvider = ({ children }) => {
  const [swiperData, setSwiperdata] = useState([]);
  const fetchAPI = async () => {
    const response = await fetch(
      `${TMDB_URL}movie/now_playing?api_key=${TMDB_KEY}&language=en-US`
    );

    const { results } = await response.json();

    setSwiperdata(results);
  };

  return (
    <TmdbContext.Provider value={{ swiperData, fetchAPI }}>
      {children}
    </TmdbContext.Provider>
  );
};

export default TmdbContext;
