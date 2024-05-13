"use client";
import Image from "next/image";
import Link from "next/link";
import MovieImage from "../movieImage/MovieImage.js";
import styles from "./MovieDetails.module.css";
import { joinGenres } from "../../lib/Utility.js";

export default function MovieDetails({ movie }) {
  if (!movie) return null;

  return (
    <div className={`${styles.myTile} row`}>
      <div className="col-sm-3">
        <MovieImage urlImage={movie.urlImage} />
      </div>
      <div className="col-sm-9">
        <div className="row">
          <div className="col-6">
            <h1 className={styles.whiteText}>{movie.name}</h1>
          </div>
          <div className="col-4 float-start">
            <p className={styles.ratingStyle}>{movie.rating}</p>
          </div>
          <div className="col-2 float-end">
            <Link href={"/dashboard"}>
              <Image
                src={`/searchIcon.png`}
                alt="SearchIcon"
                width={100}
                height={100}
              />
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-12 float-start">
            <p className={`${styles.greyText} card-text`}>
              {joinGenres(movie.genres)}
            </p>
          </div>
        </div>
        <div className={`row ${styles.redText}`}>
          <div className="col-2">{movie.releaseYear}</div>
          <div className="col-4 float-start">{movie.durationResume}</div>
        </div>
        <div className="row">
          <div className="col-12">
            <p className={`${styles.greyText} card-text`}>
              {movie.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
