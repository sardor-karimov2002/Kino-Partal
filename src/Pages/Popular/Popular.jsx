import React, { useState } from 'react';
import { useEffect } from 'react';
import MoviesCard from '../../Components/MovieCard/MoviesCard';
import { Pagination } from "@mui/material";
import styledComponents from 'styled-components';
import axios from 'axios';
import "./Popular.css"
import PaginationComponents from '../../Components/Pagination/Pagination';
const Popular = ({PopularContainer}) => {
  const [movie, setMovie] = useState({
    isFetched: false,
    data: {},
    error: null,
    totalPages: 0
  })
  const [activePage, setActivePage] = useState(1)
  useEffect(() => {
    axios.get(process.env.REACT_APP_MOVIE_API + "/movie/popular", {
      params: {
        api_key: process.env.REACT_APP_MOVIE_API_KEY,
        page: activePage
      }
    })
      .then(function (response) {
        console.log(response);
        setMovie({
          isFetched: true,
          data: response.data,
          error: false,
          totalPages: 
          response.data.total_pages >500 ? 500 :response.data.total_pages
        })
      })
      .catch(function (error) {
        setMovie({
          isFetched: true,
          data: null,
          error: error,
          totalPages: 0
        })
      })

  }, [activePage])
  return (
    < PopularContainer>
      <div className='movie'>
        {
          movie.isFetched === true ? (
            movie.data.results.map((item) => <MoviesCard obj={item} />)
          ) : (
            <h1>Loading...</h1>
          )
        }
      </div>
      <PaginationComponents setActivePage={setActivePage} totalPages={movie.totalPages}/>
    </PopularContainer>

  );
}

export default Popular;
// REACT_APP_MOVIE_API=https://api.themoviedb.org/3
// REACT_APP_MOVIE_API_KEY="c9579ea5f7a61088232ff259fc03d02c"


// const row = styledComponents.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 50px 80px;
// `