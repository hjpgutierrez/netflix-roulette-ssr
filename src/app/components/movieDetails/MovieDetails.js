"use client";
import Image from "next/image";
import MovieImage from "../movieImage/MovieImage.js";
import styles from "./MovieDetails.module.css";
import { joinGenres } from "../../lib/Utility.js";
import { useRouter } from "next/navigation";

export default function MovieDetails({ movie }) {
  const router = useRouter();
  if (!movie) return null;

  const onCloseMovieDetails = () => {
    router.push("/dashboard");
  };

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
            <Image
              src={`/searchIcon.png`}
              alt="SearchIcon"
              width={100}
              height={100}
              onClick={onCloseMovieDetails}
            />
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
