import {Route, Routes} from 'react-router-dom';
// import { useState } from 'react';
import React from 'react';
import { SharedLayout } from './SharedLayout';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieInformation/MovieDetails';
// import api from 'api/api';
// import Notiflix from 'notiflix';
export const App = () => {
  
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >
      <Routes>
      <Route path="/" element={<SharedLayout />}>
      <Route index element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movies/:movieId" element={<MovieDetails />} />
      </Route>
     </Routes>
    </div>
  );
};
