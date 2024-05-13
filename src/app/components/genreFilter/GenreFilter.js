"use client";
import Link from "next/link";

const GenreFilter = ({ genresToDisplay, activeGenre }) => {
  let genreFilters = genresToDisplay.map((genre) => (
    <li className="nav-item" key={genre}>
      <Link
        className={"nav-link " + (activeGenre === genre ? "active" : "")}
        href={`/dashboard/genre/${genre}`}
      >
        {genre}
      </Link>
    </li>
  ));

  const content = (
    <ul className="nav">
      <li className="nav-item">
        <Link
          className={"nav-link " + (activeGenre === "" ? "active" : "")}
          href={`/dashboard`}
        >
          ALL
        </Link>
      </li>
      {genreFilters}
    </ul>
  );

  return content;
};

export default GenreFilter;
