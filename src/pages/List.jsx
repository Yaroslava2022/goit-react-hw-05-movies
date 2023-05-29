import api from "api/api";
const { fetchMovies } = api;
export const List = fetchMovies().then(data => 
    {data.results.map(({id, title})=>{
   return(    
   <li key={id}>
    Title ={title}
    </li> )
 
  })}
  
  )
