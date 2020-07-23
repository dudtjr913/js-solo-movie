import React from "react";
import Proptypes from "prop-types";
import { Link } from "react-router-dom";

function Movies({ title, id, year, poster, genres, summary }) {
  return (
    <div>
      <img src={poster} alt={title} title={title}></img>
      <Link
        to={{
          pathname: "/about",
          state: {
            title,
          },
        }}
      >
        <h1>{title}</h1>
      </Link>
      <h4>{summary.slice(0, 300) + "..."}</h4>
      <ul>
        {genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

Movies.propTypes = {
  id: Proptypes.number.isRequired,
  year: Proptypes.number.isRequired,
  title: Proptypes.string.isRequired,
  poster: Proptypes.string.isRequired,
  genres: Proptypes.arrayOf(Proptypes.string).isRequired,
  summary: Proptypes.string.isRequired,
};

export default Movies;
