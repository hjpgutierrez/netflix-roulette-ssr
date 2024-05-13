import MovieTile from "../movieTile/MovieTile";
import GenreFilter from "../genreFilter/GenreFilter";
import SortControl from "../sortControl/SortControl";
import { movieMapperArray } from "../../lib/Utility";

// Static values
const sortControlOptions = ["Release Date", "Title"];
const fixedGenres = [
  "Action",
  "Adventure",
  "Animation",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Horror",
];

const moviesContainer = async ({ activeGenre, sortedBy, urlRequest }) => {
  const response = await getMovies(urlRequest);
  const movieList = movieMapperArray(response.data);

  const listItems = movieList.map((movieItem) => (
    <div className="col-4" key={movieItem.id}>
      <MovieTile movie={movieItem} />
    </div>
  ));

  const content = (
    <div className="container">
      <div className="mt-4 p-5 movieListContainer text-white">
        <div className="row">
          <div className="col-8">
            <GenreFilter
              genresToDisplay={fixedGenres}
              activeGenre={activeGenre}
            />
          </div>
          <div className="col-4 sortBy">
            <SortControl
              options={sortControlOptions}
              currentOption={sortedBy}
            />
          </div>
          <hr></hr>
        </div>
        <div className="row p-3">
          <div className="col lead">
            <b>{response.totalAmount}</b> movies found
          </div>
        </div>
        <div className="row mb-5">{listItems}</div>
      </div>
    </div>
  );

  return content;
};

export default moviesContainer;

async function getMovies(urlRequest) {
  const res = await fetch(urlRequest);
  const data = await res.json();
  //console.log(data);
  // Pass data to the page via props
  return data;
}
