import GenreFilter from "../components/genreFilter/GenreFilter";
import SortControl from "../components/sortControl/SortControl";
import MovieTile from "../components/movieTile/MovieTile";
import { movieMapperArray } from "../lib/Utility";

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

export default async function DashboardLayout({ children }) {
  const response = await getMovies();
  const movieList = movieMapperArray(response.data);

  const listItems = movieList.map((movieItem) => (
    <div className="col-4" key={movieItem.id}>
      <MovieTile movie={movieItem} />
    </div>
  ));

  const content = (
    <>
      <div className="container">{children}</div>
      <div className="container">
        <div className="mt-4 p-5 movieListContainer text-white">
          <div className="row">
            <div className="col-8">
              <GenreFilter genresToDisplay={fixedGenres} activeGenre={""} />
            </div>
            <div className="col-4 sortBy">
              <SortControl
                options={sortControlOptions}
                currentOption={"Title"}
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

        <div className="row justify-content-md-center p-3 footer">
          <div className="col-md-auto">
            <span className="textlogo">netflix</span>
            <span className="textlogo2">roulette</span>
          </div>
        </div>
      </div>
    </>
  );

  return content;
}

async function getMovies() {
  const baseURL =
    "http://localhost:4000/movies?limit=30&sortBy=release_date&sortOrder=desc";
  // Fetch data from external API
  const res = await fetch(baseURL);
  const data = await res.json();
  //console.log(data);
  // Pass data to the page via props
  return data;
}
