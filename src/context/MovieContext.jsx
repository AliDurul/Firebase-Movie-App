import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react'

const MovieContext = createContext()

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;


const MovieProvider = ({ children }) => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        getData(FEATURED_API)
    }, [])


    const getData = async (API) => {
        try {
          const response = await axios(API)
          console.log(response);
          setMovies(response?.data?.results)
        } catch (error) {
          console.log(error);
        }
      }


    const values = {}

    return (
        <MovieContext.Provider value={values}>{children}</MovieContext.Provider>
    )
}

export default MovieProvider;

export const useMovieContext = () => {
    return useContext(MovieContext)
}
