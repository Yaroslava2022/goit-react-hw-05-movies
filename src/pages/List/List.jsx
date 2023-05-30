import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './List.module.css'

export default function ListOnSearch({ films }) {
  console.log(films);

  const location = useLocation();
  // console.log(location);
  return (
    <>
    <h1>Tranding today</h1>
    <ul className={css.list}>
      {films.map(({ id, name, title }) => (
        <Link key={id} to={`/movies/${id}`} state={{ from: location }}>
          {name ? (
            <li className={css.item}>{name}</li>
          ) : (
            <li className={css.item}>{title}</li>
          )}
        </Link>
      ))}
    </ul>
    </>
  );
}

ListOnSearch.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object),
};