import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { Link } from "react-router-dom";
import NotImage from "../../public/NotImage.png";

const Movies = () => {
  const { isLoading, movies } = useContext(DataContext);

  return (
    <div className="movies">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        movies.map((movie) => (
          <Link
            to={`/movies/${movie.imdbID}`}
            key={movie.imdbID}
            className="card"
          >
            <img
              src={movie.Poster === "N/A" ? NotImage : movie.Poster}
              alt={`Foto de ${movie.Title}`}
              className="card__img"
            />
            <div className="card__info">
              <h5 className="card__title">{movie.Title}</h5>
              <p className="flex justify-between">
                <span className="card__spec">{movie.Type}</span>
                <span className="card__spec">{movie.Year}</span>
              </p>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default Movies;
