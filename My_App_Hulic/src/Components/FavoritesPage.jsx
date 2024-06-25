import React, { useEffect, useState } from 'react';
import './FavoritesPage.css'; 

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const removeFromFavorites = (movieId) => {
    const updatedFavorites = favorites.filter((movie) => movie.id !== movieId);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className='favorites-page'>
      <h1 className='page_title'>Favorite Movies</h1>
      <div className="favorites-container">
        {favorites.length === 0 ? (
          <p>No favorite movies yet.</p>
        ) : (
          favorites.map((movie) => (
            <div key={movie.id} className="favorite-card">
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
             
                <button onClick={() => removeFromFavorites(movie.id)} className='remove-favorite-button'>Remove from Favorites</button>
              
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
