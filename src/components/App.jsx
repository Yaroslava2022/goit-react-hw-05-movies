import {Route, Routes, Navigate} from 'react-router-dom';
import React from 'react';
import { Suspense } from 'react';
import Loading from './Loader/Loading';

// const SharedLayout = lazy(() =>
//   import('./SharedLayout.jsx'),
// );

import { SharedLayout } from './SharedLayout';
// const Home = lazy(() =>
//   import('pages/Home.jsx'),
// );
import Home from 'pages/Home';
// const Movies = lazy(() =>
//   import('pages/Movies.jsx'),
// );
import Movies from 'pages/Movies';
// const MovieDetails = lazy(() =>
//   import('pages/MovieInformation/MovieDetails.jsx'),
// );
import MovieDetails from 'pages/MovieInformation/MovieDetails';
// const Cast = lazy(() =>
//   import('./Cast/Cast.jsx'),
// );
import Cast from './Cast/Cast';
// const Reviews = lazy(() =>
//   import('./Reviews/Reviews.jsx'),
// );
import Reviews from './Reviews/Reviews';




export const App = () => {
  
  return (
    <div>
       <Suspense fallback={<Loading />}>
      <Routes>
      <Route path="/" element={<SharedLayout />}>
      <Route index element={<Home />} />
         <Route path="/movies" element={<Movies />} />
         <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
      <Route path="*" element={<Navigate to={'/'} />} />
      </Route>
     </Routes>
     </Suspense>
    </div>
  );
};
