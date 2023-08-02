import React from "react";
import { useMovieContext } from "../context/MovieContext";

const Main = () => {

  const { movies, getMovies, loading } = useMovieContext()
  console.log(movies);


  return <div>Main</div>;
};

export default Main;
