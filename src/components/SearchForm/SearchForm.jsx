import Notiflix from "notiflix";
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './SearchForm.module.css';

export default function SearchForm({ onSubmit }) {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const onChangeHandler = e => {
    console.log(e.target.value);
    setQuery(e.target.value);
  };

  const onFormSubmitHandler = e => {
    e.preventDefault();
    if (query.trim() === '') {
       Notiflix.Notify.failure('Enter your  query');
    }

    const params = { query };

    setSearchParams(params);
    setQuery('');
  };

  return (
    <form onSubmit={onFormSubmitHandler} className={css.form}>
      <label>
        <input
          type="text"
          value={query}
          placeholder="Enter  your query"
          onChange={onChangeHandler}
          className={css.input}
        />
      </label>
      <button type="submit" className={css.button}>
        Search
      </button>
    </form>
  );
}
SearchForm.propTypes = {
  onSubmit: PropTypes.func,
};