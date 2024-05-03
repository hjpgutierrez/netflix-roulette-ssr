import { movieMapper } from "../../lib/Utility";
import MovieDetails from "../../components/movieDetails/MovieDetails.js";

async function MovieShellDetails({ params }) {
  const response = await getMovie(params.id);
  const movieItem = movieMapper(response);
  return <MovieDetails movie={movieItem} />;
}

export default MovieShellDetails;

async function getMovie(movieId) {
  const getMovieUrl = `http://localhost:4000/movies/${movieId}`;
  const res = await fetch(getMovieUrl);
  const data = await res.json();
  // Pass data to the page via props
  return data;
}
