import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Swipe() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchAPI() {
      const response = await fetch(
        'https://api.themoviedb.org/3/movie/now_playing?api_key=814ea9b39c01fdb6848fd9ee5f9bbbf5&language=en-US'
      );

      const { results } = await response.json();

      setMovies(results);
    }
    fetchAPI();
  });

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {movies.map((movie) => (
        <SwiperSlide key={movie.id}>
          <a href="">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          </a>
          <h4>{movie.vote_average} / 10</h4>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
export default Swipe;
