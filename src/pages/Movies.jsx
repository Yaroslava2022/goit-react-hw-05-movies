// import { useState } from 'react'
// import Notiflix from 'notiflix';
import css from './Movies.module.css';
// import PropTypes from 'prop-types';

export default function Movies({ onSubmit }) {
    
    return (
          
                    <form className={css.searchForm}>
                    
                      <input
                        className={css.searchFormInput}
                        type="text"
                        // onChange={onChangeHandler}
                        autoComplete="off"
                        autoFocus
                        placeholder="Search movies"
                        // value={query}
                      />
                        <button type="submit" className={css.searchFormButton}>
                        <span className={css.searchFormButtonLabel}>Search</span>
                      </button>
            
                    </form>
                 
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

// Movies.propTypes = {
// onSubmit: PropTypes.func.isRequired,
// };