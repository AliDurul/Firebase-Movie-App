import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react'

const MovieContext = createContext()

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;


const MovieProvider = ({ children }) => {

  const [movies, setMovies] = useState([])

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getMovies(FEATURED_API)
  }, [])


  const getMovies = async (API) => {
    setLoading(true)
    try {
      const response = await axios(API)
      setMovies(response?.data?.results)
    } catch (error) {
      console.log(error);
    }
    finally {
      setLoading(false); 
    }
  }


  const values = { movies, getMovies,loading }

  return (
    <MovieContext.Provider value={values}>{children}</MovieContext.Provider>
  )
}

export default MovieProvider;

export const useMovieContext = () => {
  return useContext(MovieContext)
}
