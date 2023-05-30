import { useState, useEffect } from 'react';
import {
  Link,
  Outlet,
  useParams,
  useNavigate,
  useLocation,
} from 'react-router-dom';

import css from './MovieDetails.module.css';
import api from "api/api";

import Loading from 'components/Loader/Loading';

export default function MovieDetails() {
    const [movie, setMovie] = useState('');
    const [loading, setLoading] = useState(false);
    const { fetchMovieDetails} = api;

    const { movieId } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    console.log(location.state.from);
  
    const goBack = () => {
        // console.log(location.state.from);
        navigate(location?.state?.from ?? '/');
        // console.log(location.state.from);
      };
    
      useEffect(() => {
        if (movieId === '') {
          return;
        }
        fetchFilmDetails();
      }, [movieId]);
    
      const fetchFilmDetails = () => {
        setLoading(true);
        fetchMovieDetails(movieId).then(data => {
          // console.log(data);
          setMovie(data);
          setLoading(false);
        });
      };
 
   
  
      return (
        <div>
          <button type="button" className={css.button} onClick={goBack}>
            Go back
          </button>
          {loading && <Loading />}
    
          {movie && (
            <>
              <div className={css.filmThumb}>
                {
                 
                  (
                    <img
                      src="https://i.ibb.co/8mnHvb2/no-poster.jpg"
                      alt="no_poster"
                      className={css.image}
                    />
                  ) && (
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                      className={css.image}
                    />
                  )
             
                }
                <div className={css.info}>
                  <h2 className={css.title}>{movie.title}</h2>
                  <p>User Score {movie.vote_average*10}%</p>
                  <h3>Overview</h3>
                  <p className={css.overview}>{movie.overview}</p>
                  <h4>Genres</h4>
                  <p className={css.genres}>
                    {movie.genres.map(genre => genre.name).join(' ')}
                  </p>
                </div>
              </div>
              <div>
                <p>Additional information</p>
                <ul>
                  <li>
                    <Link
                      to={`/movies/${movieId}/cast`}
                      state={{ from: location.state.from }}
                    >
                      Cast
                    </Link>
                  </li>
    
                  <li>
                    <Link
                      to={`/movies/${movieId}/reviews`}
                      state={{ from: location.state.from }}
                    >
                      Reviews
                    </Link>
                  </li>
                </ul>
                <Outlet />
              </div>
            </>
          )}
        </div>
      );
    }

