const key = 'a76f580e91cd6b2ed7bbe4acd57429cd';
function fetchTrendMovies(newQuery) {
    // const key = 'a76f580e91cd6b2ed7bbe4acd57429cd';
    return fetch(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${key}&language=en-US`
    ).then(response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error(`Movie ${newQuery} not found`));
    });
  }
  
  function fetchMovieDetails(movieId) {
    // const key = 'a76f580e91cd6b2ed7bbe4acd57429cd';
    // const movieId = '603692'
    return fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=en-US`
    ).then(response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error(`Movie not found`));
    });
  }
  function fetchFilmsOnQuery(query) {
    return fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${query}&page=1`,
    ).then(response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error(`Movie  not found`));
    });
  }
  const api = {
    fetchFilmsOnQuery,
    fetchTrendMovies,
    fetchMovieDetails
  };
  
  export default api;