import React, { useState } from 'react'
import { Search } from './Search'
import { MovieCard } from './MovieCard';

const apiURL = "https://www.omdbapi.com?apikey=afdc4dff";

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const searchMovies = async (title) => {
    if (title !== "") {
      const response = await fetch(`${apiURL}&s=${title}`);
      const data = await response.json();
      setMovies(data.Search);
    }
  }
  return (
    <>
      <div className="container">
        <h1>Movie Search</h1>
        <Search searchMovies={searchMovies} />

        {movies ?
          (<div className="wrapper">
            {movies.map(movie => {
              return <MovieCard movie={movie} />
            })}
          </div>
          ) : (<p id="errorMsg">This movie doesn't exist!</p>)}
      </div>
    </>
  )
}