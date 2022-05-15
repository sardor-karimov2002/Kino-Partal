import React, { useState } from 'react';
import { useEffect } from 'react';
import MoviesCard from '../../Components/MovieCard/MoviesCard';
import axios from 'axios';
import "./Popular.css"
const Popular = () => {
  const [movie, setMovie] = useState({
    isFetched:false,
    data:{},
    error:null
  })
  useEffect(() => {
    axios.get(process.env.REACT_APP_MOVIE_API + "/movie/popular", {
      params: {
        api_key: process.env.REACT_APP_MOVIE_API_KEY
      }
    })
      .then(function (response) {
        setMovie({
          isFetched:true,
          data:response.data,
          error:false
        })
      })
      .catch(function (error) {
        setMovie({
          isFetched:true,
          data:null,
          error:error
        })
      })

  }, []);
  console.log(movie);
  return (
    <div className='movie'>
      {
        movie.isFetched===true ? (
          movie.data.results.map((item) => <MoviesCard obj={item} />)
        ):(
          <h1>Loading...</h1>
        )
      }
    </div>
  );
}

export default Popular;
// REACT_APP_MOVIE_API=https://api.themoviedb.org/3
// REACT_APP_MOVIE_API_KEY="c9579ea5f7a61088232ff259fc03d02c"