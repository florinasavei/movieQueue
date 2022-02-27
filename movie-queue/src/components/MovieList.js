import React from "react";

function MovieList({ movies, deleteMovie }) {
  return (
    <>
      <h2>Showing {movies.length} movies</h2>
      <ul>
        {movies.map((m, index) => (
          <li key={index}>
            {m} <span style={{cursor: "pointer"}} onClick={() => deleteMovie(m)}>X</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default MovieList;
