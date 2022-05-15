import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
// import MovieItem from '../../Components/MovieItem/MovieItem';
import "./SingleMovie.css"
import LitterCard from '../../Components/LitterCard/LitterCard';

const SingleMovie = () => {
  const params = useParams()
  // console.log(params);// movieni usestete
  const [movie, setMovie] = useState({
    isFetched: false,
    data: {},
    error: null
  })
  //vioni usesteti
  const [video, setVideo] = useState({
    isFetched: false,
    data: {},
    error: null
  })
  const [recMovie, setRecMovie] = useState({
    isFetched: false,
    data: {},
    error: null
  })
  const [person, setPerson] = useState({
    isFetched: false,
    data: {},
    error: null
  })
  useEffect(() => {
    axios.get(process.env.REACT_APP_MOVIE_API + "/movie/" + params.id, { //shu yerda malumot kemayapti 
      params: {
        api_key: process.env.REACT_APP_MOVIE_API_KEY
      }
    })
      .then(function (response) {
        // console.log(response);
        setMovie({
          isFetched: true,
          data: response.data,
          error: false
        })
      })
      .catch(function (error) {
        setMovie({
          isFetched: true,
          data: null,
          error: error
        })
        // console.log(error);
      })

    // }, []);
    axios.get(process.env.REACT_APP_MOVIE_API + "/movie/" + params.id + "/videos", {
      params: {
        api_key: process.env.REACT_APP_MOVIE_API_KEY
      }

    })
      .then(function (response) {
        // console.log(response);
        setVideo({
          isFetched: true,
          data: response.data,
          error: false
        })

      })
      .catch(function (error) {
        // console.log(error);
        setVideo({
          isFetched: true,
          data: {},
          error: error
        })
      })


    axios.get(process.env.REACT_APP_MOVIE_API + "/movie/" + params.id + "/recommendations", {
      params: {
        api_key: process.env.REACT_APP_MOVIE_API_KEY
      }

    })
      .then(function (response) {
        // console.log(response);
        setRecMovie({
          isFetched: true,
          data: response.data,
          error: false
        })

      })
      .catch(function (error) {
        // console.log(error);
        setRecMovie({
          isFetched: true,
          data: {},
          error: error
        })
      })

    axios.get(process.env.REACT_APP_MOVIE_API +
      "/movie/" +
      params.id +
      "/credits", {
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

  }, [params.id]);
  console.log(person.data);
  return (
    <>
      {
        movie.isFetched ? (
          <div style={{
            backgroundImage: `url(${process.env.REACT_APP_MOVIE_IMG_URL + movie.data.backdrop_path})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"

          }}>
            <div className='single'>
              <div className='single_actiors'>
                <h2>actiors</h2>
                {
                  person.isFetched &&
                  person.data.cast.map(item =>
                    <LitterCard
                      key={item.id}
                      path="person"
                      id={item.id}
                      img={item.profile_path}
                      title={item.name}
                    />)
                }
              </div>
              <div className='single_info'>
                {
                  <>
                    <h1>{movie.data.title}</h1>
                    <p>{movie.data.overview}</p>
                    {
                      movie.data.genres.map(item => <button key={item.id}>{item.name}</button>)
                    }
                    {
                      video.isFetched && video.data.results.splice(0, 1).map(item => (
                        <div key={item.id}>
                          <iframe
                            width="100%"
                            height="415"
                            src={`https://www.youtube.com/embed/${item.key}`}
                            title={item.name}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                          </iframe>
                        </div>
                      ))
                    }

                  </>
                }
              </div>
              <div className='single_recommendations'>
                <h2>recommendations movies</h2>
                {
                  recMovie.isFetched && recMovie.data.results.map(item =>
                    <LitterCard
                      key={item.id}
                      id={item.id}
                      path="Popular"
                      img={item.poster_path}
                      title={item.title}
                    />)
                }
              </div>
            </div>
          </div>
        ) : (
          <h1>Loading....</h1>
        )
      }
    </>
  );
}

export default SingleMovie;
