import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import MovieCard from "./MovieCard";
// 25ac32c4

const API_URL = "http://www.omdbapi.com/?apikey=25ac32c4";


const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    // console.log(data.Search);
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input type="text" value={searchTerm} placeholder="Search for movies" onChange={(e) => setSearchTerm(e.target.value)} />

        <IoIosSearch
          className="img"
          onClick={() => {
            searchMovies(searchTerm);
          }}
        />
      </div>

      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
