import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import MoviesCard from '../../Components/MovieCard/MoviesCard';
import PaginationComponents from '../../Components/Pagination/Pagination';
import useDebounce from '../../Hooks/useDebounce';

const Search = ({PopularContainer}) => {

  const {searchQuery}=useParams()
  const [searchedMovie, setSearchedMovie] = useState({
    isFetched: false,
    data: {},
    error: null,
    totalPages: 0
  })
  // console.log(movie);
  const [activePage, setActivePage] = useState(1)
  const debouncedSearchTerm = useDebounce(searchQuery, 5000);
  useEffect(() => {

    axios.get(process.env.REACT_APP_MOVIE_API + "/search/movie?query="+debouncedSearchTerm, {
      params: {
        api_key: process.env.REACT_APP_MOVIE_API_KEY,
        page: activePage
      }
    }).then(function (response) {
      setSearchedMovie({
        isFetched: true,
        data: response.data,
        error: false,
        totalPages: response.data.total_pages
      })
    }).catch(function (error) {
      setSearchedMovie({
        isFetched: true,
        data: {},
        error: error,
        totalPages: 0
      })
    })
  }, [activePage,debouncedSearchTerm]);
  console.log(searchedMovie);
  return (
    <PopularContainer>
      {/* <h1> search</h1> */}
      <div style={{display:"flex",flexWrap:"wrap"}}>
        {
          searchedMovie.isFetched ?(
            searchedMovie.data.results.map(item=> <MoviesCard key={item.id} obj={item}/>)
          ):(
            <h1>Loading.....</h1>
          )
        }
      </div>
      <PaginationComponents setActivePage={setActivePage} totalPages={searchedMovie.totalPages}/>
    </PopularContainer>
  );
}

export default Search;
