import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Notiflix from 'notiflix';
// import css from './Movies.module.css';
import PropTypes from 'prop-types';
import ListOnSearch from './List/List';
import api from 'api/api';
import Loading from 'components/Loader/Loading';
import SearchForm from 'components/SearchForm/SearchForm';

export default function Movies() {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') || '';

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    console.log('запит змінився');
    fetchOnQuery(searchQuery);
  }, [searchQuery]);

  const fetchOnQuery = queryFilms => {
    const { fetchFilmsOnQuery } = api;
    if (!queryFilms) {
      return;
    }
    console.log('query  film for render');
    setLoading(true);
    fetchFilmsOnQuery(queryFilms)
      .then(data => {
        if (data.results.length === 0) {
          console.log('no  films');
          Notiflix.Notify.failure('No  films  found');
          return;
        }
        console.log(data.results);
        setFilms(data.results);
        setLoading(false);
        setSearchParams({ query: searchQuery });
      })
      .catch(error => setError(error));
  };
    return (
          <>
                 <SearchForm/>
                 {loading && <Loading />}
                 {films && <ListOnSearch films={films} />} 
                 </>
                );
    
        

}
// export default function Movies({ onSubmit }) {
//     const [query, setQuery] = useState("");
// 	const onChangeHandler = (e) => {
//         setQuery(e.target.value);
//       };

//       const onFormSubmitHandler = (e) => {
//         e.preventDefault();
//         if (query.trim() === "") {
//             Notiflix.Notify.failure('Enter your query');
//           return;
//         }
//        onSubmit(query);
//        setQuery("");
//       };
    
     
//         return (
          
//             <form className={css.searchForm} onSubmit={onFormSubmitHandler}>
//               <button type="submit" className={css.searchFormButton}>
//                 <span className={css.searchFormButtonLabel}>Search</span>
//               </button>
    
//               <input
//                 className={css.searchFormInput}
//                 type="text"
//                 onChange={onChangeHandler}
//                 autoComplete="off"
//                 autoFocus
//                 placeholder="Search movies"
//                 value={query}
//               />
//             </form>
         
//         );
//   };

Movies.propTypes = {
onSubmit: PropTypes.func,
};