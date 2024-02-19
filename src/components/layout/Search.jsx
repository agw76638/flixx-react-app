import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import TmdbContext from '../../context/tmdb/TmdbContext';

function Search() {
  const [text, setText] = useState('');
  const [type, setType] = useState('movie');

  const { searchResults, searchAPI } = useContext(TmdbContext);

  const navigate = useNavigate();

  const handleChange = (e) => setText(e.target.value);

  const handleTypeChange = (e) => setType(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text === '') {
      toast.error('Please enter something');
    } else {
      searchAPI(text, type);
      setText('');
      navigate(`/results?type=${type}&query=${text}`);
    }
  };

  return (
    <section>
      <div>
        <div id="alert"></div>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="radio"
              id="movie"
              name="type"
              value="movie"
              checked={type === 'movie'}
              onChange={handleTypeChange}
            />
            <label htmlFor="movies">Movies</label>
            <input
              type="radio"
              id="tv"
              name="type"
              value="tv"
              checked={type === 'tv'}
              onChange={handleTypeChange}
            />
            <label htmlFor="shows">TV Shows</label>
          </div>
          <div>
            <input
              type="text"
              name="search-term"
              id="search-term"
              placeholder="Enter search term"
              onChange={handleChange}
              className="text-black"
            />
            <button type="submit">search</button>
          </div>
        </form>
      </div>
    </section>
  );
}
export default Search;
