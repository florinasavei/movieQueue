import React from "react";

function MovieForm({newMovie, addMovie, handleMovieChange}) {
  return (
    <form onSubmit={addMovie}>
      <input
        value={newMovie}
        placeholder="Movie Name"
        onChange={handleMovieChange}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default MovieForm;
