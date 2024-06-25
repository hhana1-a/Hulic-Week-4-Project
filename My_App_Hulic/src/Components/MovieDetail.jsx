import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../Api/api_helper';
import './MovieDetail.css'; 
// import GenreList from './GenreList';
import { formatRating, limitDescription, getYearFromDate } from './utils';

const MovieDetail = () => {
  const { id } = useParams(); 
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const movieData = await fetchMovieDetails(id);
        setMovie(movieData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    getMovie();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!movie) {
    return <p>Movie not found</p>;
  }

  return (
    <div className='movie-detail'>
      <h1>{movie.title}</h1>
      <div className='movie-info'>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <div className='details'>
          {/* <p>Genres: <GenreList genreIds={movie.genre_ids} /></p> */}
          <p>Overview: {movie.overview}</p>
          <p>Rating: {movie.vote_average}</p>
          <p>Year: {getYearFromDate(movie.release_date)}</p>
          <button className='play-btn'><i className="fa fa-play" aria-hidden="true"></i> Play</button>
       
           </div>
          
      </div>
      
    </div>
  );
};

export default MovieDetail;
