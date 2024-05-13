"use client";
import MovieImage from "../movieImage/MovieImage.js";
import styles from "./MovieTile.module.css";
import { joinGenres } from "../../lib/Utility.js";
import Link from "next/link";

export default function MovieTile({ movie }) {
  return (
    <>
      <div className={`${styles.myCard} card border-0`}>
        <Link
          href={`/dashboard/${movie.id}/edit`}
          className="edit-icon addmoviebutton"
          title="Edit"
        >
          <svg
            className="feather feather-edit"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
          </svg>
          EDIT MOVIE
        </Link>
        <MovieImage urlImage={movie.urlImage} />
        <div className="card-body" onClick={(movie) => onClick(movie)}>
          <h5 className={`${styles.mytextcolor} card-title`}>
            {movie.name}
            <small className={`${styles.yearStyle} card-text float-end`}>
              {movie.releaseYear}
            </small>
          </h5>
          <small className={`${styles.mytextcolor} card-text`}>
            {joinGenres(movie.genres)}
          </small>
          <Link
            href={`/dashboard/${movie.id}`}
            className="more-icon addmoviebutton"
            title="See More"
          >
            <svg
              className="feather feather-edit"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
            See More
          </Link>
        </div>
      </div>
    </>
  );
}
