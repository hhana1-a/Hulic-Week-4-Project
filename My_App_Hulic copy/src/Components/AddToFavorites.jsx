import React from 'react';

const AddToFavorites = ({ movie, addToFavorites, removeFromFavorites, favorites }) => {
  const isFavorite = favorites.some((fav) => fav.id === movie.id);

  const toggleFavorites = () => {
    if (isFavorite) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
  };

  return (
    <button onClick={toggleFavorites} className='favorite-button'>
      {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
    </button>
  );
};

export default AddToFavorites;
