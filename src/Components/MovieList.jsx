import React, { useContext , useState } from "react";
import { GlobalContext } from "../GlobalContext";

const MovieList = () => {
  const { movieList, loading } = useContext(GlobalContext);

  return (
    <div className="movieList">
      {loading ? (
        <span>Loading... Please wait</span>
      ) : (
        <>
          {movieList?.map((item) => (
            <div key={item.imdbID}>
              <img src={item.Poster} alt="Movie Poster" />
              <p>{item.Title}</p>
              <p>{item.Year}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default MovieList;
