// import React, { useEffect, useState } from 'react';
// import { fetchGenres } from '../Api/api_helper';

// const GenreList = ({ genreIds }) => {
//   const [genres, setGenres] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const getGenres = async () => {
//       try {
//         const genreData = await fetchGenres();
//         setGenres(genreData.genres || []); // Ensure genres is always an array
//         setLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     };

//     getGenres();
//   }, []);

//   const getGenreNames = (ids) => {
//     if (loading) return 'Loading genres...';
//     if (error) return `Error loading genres: ${error}`;
//     if (!genres.length) return 'No genres available';

//     return ids.map((id) => genres.find((genre) => genre.id === id)?.name).filter(Boolean).join(', ');
//   };

//   return <span>{getGenreNames(genreIds)}</span>;
// };

// export default GenreList;
