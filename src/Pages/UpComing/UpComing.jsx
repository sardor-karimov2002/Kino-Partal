import axios from 'axios';
import React, { useState,useEffect } from 'react';
import MoviesCard from '../../Components/MovieCard/MoviesCard';

const UpComing = () => {
  const [movie,setMovie]=useState({
    isFetched:false,
    data:{},
    error:null
  })
  useEffect(() => {

    axios.get(process.env.REACT_APP_MOVIE_API + "/movie/upcoming",{
      params:{
        api_key:process.env.REACT_APP_MOVIE_API_KEY
      }
    }).then(function(response) {
      setMovie({
        isFetched:true,
        data:response.data,
        error:false
      })
    }).catch(function(error){
      setMovie({
        isFetched:true,
        data:{},
        error:error
      })
    })
  }, []);
  return (
    <div style={{
      display:'flex', flexWrap:"wrap", justifyContent:"center", marginTop:"30px  "
    }}>
     {
       movie.isFetched ? (
         movie.data.results.map((element , index)=><MoviesCard key={index} obj={element} />)
       ) :(
         <h1>Loading.....</h1>
       )
     }
    </div>
  );
}

export default UpComing;
