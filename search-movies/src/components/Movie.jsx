import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const Movie = () => {
  const { id } = useParams();
  const { isLoading, error, movies } = useFetch(`&i=${id}`);

  console.log(movies);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div>
            <img src={movies.Poster} alt="" />
          </div>
          <div></div>
          <p>
            <strong>Title: </strong>
            {movies.Title}
          </p>
          <p>
            <strong>Actors: </strong>
            {movies.Actors}
          </p>
          <p>
            <strong>Director: </strong>
            {movies.Director}
          </p>
          <p>
            <strong>Genre: </strong>
            {movies.Genre}
          </p>
          <p>
            <strong>Languages: </strong>
            {movies.Language}
          </p>
          <p>
            <strong>Type: </strong>
            {movies.Type}
          </p>
          <p>
            <strong>Released: </strong>
            {movies.Released}
          </p>
          <p>
            <strong>Runtime: </strong>
            {movies.Runtime}
          </p>
        </div>
      )}
    </div>
  );
};

export default Movie;
