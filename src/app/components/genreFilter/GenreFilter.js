"use client";
const GenreFilter = ({ genresToDisplay, activeGenre }) => {
  const onClick = (genre) => {
    console.log(genre);
  };

  let genreFilters = genresToDisplay.map((genre) => (
    <li className="nav-item" key={genre}>
      <span
        className={"nav-link " + (activeGenre === genre ? "active" : "")}
        onClick={() => {
          onClick(genre);
        }}
      >
        {genre}
      </span>
    </li>
  ));

  const content = (
    <ul className="nav">
      <li className="nav-item">
        <span
          className={"nav-link " + (activeGenre === "" ? "active" : "")}
          onClick={() => {
            onClick("");
          }}
        >
          ALL
        </span>
      </li>
      {genreFilters}
    </ul>
  );

  return content;
};

export default GenreFilter;
