import EditMovieForm from "@/app/components/editMovieForm/EditMovieForm";
import { movieMapper } from "../../../lib/Utility";

const EditMovieFormPage = async ({ params }) => {
  const response = await getMovie(params.id);
  const movieItem = movieMapper(response);
  return <EditMovieForm movieItem={movieItem} />;
};

export default EditMovieFormPage;

async function getMovie(movieId) {
  const getMovieUrl = `http://localhost:4000/movies/${movieId}`;
  const res = await fetch(getMovieUrl);
  const data = await res.json();
  // Pass data to the page via props
  return data;
}
