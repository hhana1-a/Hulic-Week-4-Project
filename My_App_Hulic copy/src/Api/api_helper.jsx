const API_KEY = '636a17d1a4b42e1a30c42f2396183acd';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchFromApi = async (endpoint) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}?api_key=${API_KEY}`);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Error ${response.status}: ${errorData.status_message}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching from API: ${error.message}`);
    throw error;
  }
};

export const fetchMovies = async () => {
  try {
    const data = await fetchFromApi('/movie/popular');
    return data.results;
  } catch (error) {
    console.error('Error fetching movies:', error.message);
    throw error;
  }
};

export const fetchMovieDetails = async (movieId) => {
  try {
    const data = await fetchFromApi(`/movie/${movieId}`);
    return data;
  } catch (error) {
    console.error(`Error fetching movie details for ${movieId}:`, error.message);
    throw error;
  }
};

export const fetchGenres = async () => {
  try {
    const data = await fetchFromApi('/genre/movie/list');
    return data.genres;
  } catch (error) {
    console.error('Error fetching genres:', error.message);
    throw error;
  }
};
