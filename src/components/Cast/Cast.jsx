import api from 'api/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';

export default function Cast() {
  const [actors, setActors] = useState('');
   // eslint-disable-next-line 
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    if ( movieId === '') {
      return;
    }
    setLoading(true);
    api.fetchFilmCredits(movieId).then(data => {
      console.log(data.cast);
      setActors(data.cast);
      setLoading(false);
    });
  }, [movieId]);

  return (
    <>
      {actors && (
        <ul>
          {actors.map(actor => (
            <li key={actor.cast_id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt=""
                className={css.castImg}
              />
              <p>{actor.name}</p>
              <p>{actor.character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}