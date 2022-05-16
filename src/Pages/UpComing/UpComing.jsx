import axios from 'axios';
import React, { useState, useEffect } from 'react';
import MoviesCard from '../../Components/MovieCard/MoviesCard';
import PaginationComponents from '../../Components/Pagination/Pagination';

const UpComing = ({ PopularContainer }) => {
  const [movie, setMovie] = useState({
    isFetched: false,
    data: {},
    error: null,
    totalPages: 0
  })
  console.log(movie);
  const [activePage, setActivePage] = useState(1)
  useEffect(() => {

    axios.get(process.env.REACT_APP_MOVIE_API + "/movie/upcoming", {
      params: {
        api_key: process.env.REACT_APP_MOVIE_API_KEY,
        page: activePage
      }
    }).then(function (response) {
      setMovie({
        isFetched: true,
        data: response.data,
        error: false,
        totalPages: response.data.total_pages
      })
    }).catch(function (error) {
      setMovie({
        isFetched: true,
        data: {},
        error: error,
        totalPages: 0
      })
    })
  }, [activePage]);
  return (
    <PopularContainer>
      <div style={{
        display: 'flex', flexWrap: "wrap", justifyContent: "center", marginTop: "30px  "
      }}>
        {
          movie.isFetched ? (
            movie.data.results.map((element, index) => <MoviesCard key={index} obj={element} />)
          ) : (
            <h1>Loading.....</h1>
          )
        }
      </div>
      <PaginationComponents setActivePage={setActivePage} totalPages={movie.totalPages} />
    </PopularContainer>
  );
}

export default UpComing;
