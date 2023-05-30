import ListOnSearch from "./List/List";
import api from "api/api";
import { useEffect, useState } from "react";

export default function Home() {
    const [films, setFilms] = useState([]);
  
    useEffect(() => {
      api.fetchTrendMovies().then(data => {
        const { results } = data;
        // console.log(results);
        setFilms(results);
      });
    }, []);
   
  
    return <>
    <h1>Tranding today</h1>
    {films && <ListOnSearch films={films} />}</>;
  }

