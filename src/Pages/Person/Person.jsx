import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import MoviesCard from '../../Components/MovieCard/MoviesCard';
const Person = () => {
  const params = useParams()
  const [person, setPerson] = useState({
    isFetched: false,
    data: {},
    error: null
  })
  const [personMovies, setPersonMovies] = useState({
    isFetched: false,
    data: {},
    error: null
  })
  useEffect(() => {
    axios.get(process.env.REACT_APP_MOVIE_API +
      "/person/" +
      params.id,
      {
        params: {
          api_key: process.env.REACT_APP_MOVIE_API_KEY
        }

      })
      .then(function (response) {
        console.log(response);
        setPerson({
          isFetched: true,
          data: response.data,
          error: false
        })

      })
      .catch(function (error) {
        console.log(error);
        setPerson({
          isFetched: true,
          data: {},
          error: error
        })
      })
      axios.get(process.env.REACT_APP_MOVIE_API +
        "/person/" +
        params.id+
        "/movie_credits",
        {
          params: {
            api_key: process.env.REACT_APP_MOVIE_API_KEY
          }
  
        })
        .then(function (response) {
          console.log(response);
          setPersonMovies({
            isFetched: true,
            data: response.data,
            error: false
          })
  
        })
        .catch(function (error) {
          console.log(error);
          setPersonMovies({
            isFetched: true,
            data: {},
            error: error
          })
        }) 
    
  }, []);
  const styles={
    display:"flex",
    alignItems:"center",
    justifyContent:"space-between",
    flexWrap:"wrap",
    padding:"20px 80px",
    // border:"1px solid"
  }
  return (
    <div style={{
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      margin:"10px auto",
      // width:"70%",
    }}>
      {
        person.isFetched ? (
          <>
            <img style={{width:"200px"}} src={process.env.REACT_APP_MOVIE_IMG_URL+person.data.profile_path} alt={person.data.name} />
            <h1>{person.data.name}</h1>
            <p style={{fontFamily:"sans-serif" ,fontSize:"18px"}}>{person.data.biography}</p>
            <p style={{fontFamily:"sans-serif" ,fontSize:"18px"}}>Birthday:{person.data.birthday}</p>
            <p style={{fontFamily:"sans-serif" ,fontSize:"18px"}}>Place of birth:{person.data.place_of_birth}</p>

            <div style={styles}>
              {
                personMovies.isFetched 
                && personMovies.data.cast.map(item=><MoviesCard key={item.id} obj={item}/>)
              }
            </div>
          </>
        ) : (
          <h1>Loading....</h1>
        )
      }
    </div>
  );
}

export default Person;
