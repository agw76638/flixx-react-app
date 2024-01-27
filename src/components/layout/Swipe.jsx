import { useContext, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import TmdbContext from '../../context/tmdb/TmdbContext';

function Swipe() {
  const { swiperData, fetchAPI } = useContext(TmdbContext);

  useEffect(() => {
    fetchAPI();
  }, []);

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
      {swiperData.map((movie) => (
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
