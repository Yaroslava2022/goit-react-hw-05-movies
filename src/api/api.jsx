
function fetchMovies(newQuery, queryPage) {
    const key = 'a76f580e91cd6b2ed7bbe4acd57429cd';
    return fetch(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${key}&language=en-US`
    ).then(response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error(`Movie ${newQuery} not found`));
    });
  }
  
  const api = {
    fetchMovies,
  };
  
  export default api;