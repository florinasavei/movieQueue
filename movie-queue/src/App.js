import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import MovieList from "./components/MovieList";
import MovieForm from "./components/MovieForm";

function App() {
  const [movies, setMovies] = useState([]);
  const [newMovie, setnewMovie] = useState("");

  const handleMovieChange = (event) => {
    setnewMovie(event.target.value);
  };

  function addMovie(event) {
    console.log("adding new movie", newMovie);
    event.preventDefault();
    movies.push(newMovie);
    setMovies(movies);
    setnewMovie("");
  }

  function deleteMovie(movieName) {
    var filtered = movies.filter(function (value, index, arr) {
      return value !== movieName;
    });
    setMovies(filtered);
  }

  return (
    <div>
      <p>Movie List</p>
      <ul>
        <MovieForm
          newMovie={newMovie}
          addMovie={addMovie}
          handleMovieChange={handleMovieChange}
        />

        <MovieList movies={movies} deleteMovie={deleteMovie} />
      </ul>
    </div>
  );
}

export default App;
