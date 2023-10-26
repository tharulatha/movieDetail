import React, { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import MovieCard from "./components/MovieCard";
const API_URL = "http://www.omdbapi.com?apikey=9fb7be00";


const App = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([])

  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  
  };

  useEffect(() => {
    searchMovie();
  }, []);
  return (
    <div className="app">
      <h1>Movie Land</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search the Movie"
          className="searchContainer"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="submit"
          onClick={() => {
            searchMovie(search);
          }}
        >
          Search
        </button>
      </div>

      {
        movies.length > 0 ? (
          <div className="container">
            {
              movies.map((movie) => (
                <MovieCard movie={movie} key={movie.imdbID}/>
              ))
          }
         </div>
        ) : (
            <div className="empty">
              <h2>No movies found!!</h2>
            </div>
        )
     }
    </div>
  );
};

export default App;
