import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../Api/api_helper';
import './Home.css';
import { formatRating, limitDescription, getYearFromDate } from './utils';
import { Link } from 'react-router-dom';
import AddToFavorites from './AddToFavorites';
const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [favorites, setFavorites] = useState([]);

  const moviesPerPage = 10;

  useEffect(() => {
    document.title = 'Home';
  }, []);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const movieData = await fetchMovies();
        setMovies(movieData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    getMovies();
  }, []);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const addToFavorites = (movie) => {
    setFavorites((prevFavorites) => [...prevFavorites, movie]);
    localStorage.setItem('favorites', JSON.stringify([...favorites, movie]));
  };

  const removeFromFavorites = (movieId) => {
    const updatedFavorites = favorites.filter((movie) => movie.id !== movieId);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const totalPages = Math.ceil(movies.length / moviesPerPage);

  return (
    <div className='home_body'>
      <h1 className='page_title'>Popular Movies</h1>
      <div className="movies-container">
        {currentMovies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className="additional-info">
              <p className='name_of_the_movie'>{movie.name}</p>
              <p>{limitDescription(movie.overview)}</p>
              <p>Rating: {formatRating(movie.vote_average)}</p>
              <p>Year: {getYearFromDate(movie.release_date)}</p>
              <AddToFavorites movie={movie} addToFavorites={addToFavorites} removeFromFavorites={removeFromFavorites} favorites={favorites} />
              <Link to={`/movie/${movie.id}`} className='watch-button'>Watch</Link>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => paginate(i + 1)}
            className={`page-button ${currentPage === i + 1 ? 'active' : ''}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
