"use client";
import { useState } from "react";
import Dialog from "../dialog/Dialog";
import MovieForm from "../movieForm/MovieForm";
import { ToDto } from "../../lib/Utility";
import { useRouter } from "next/navigation";

const EditMovieForm = ({ movieItem }) => {
  const router = useRouter();
  let [selectedGenres, setSelectedGenres] = useState([]);

  const onSubmit = (data) => {
    if (selectedGenres.length === 0) {
      alert("At least one genre must be selected");
      return;
    }

    let body = ToDto(data, selectedGenres, movieItem.id);

    fetch("http://localhost:4000/movies", {
      method: "PUT",
      body: JSON.stringify(body),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  const onCloseModal = () => {
    router.push("/dashboard");
  };

  return (
    <Dialog isOpen={true} title={"Edit Movie"} closePortal={onCloseModal}>
      <MovieForm
        movie={movieItem}
        onSubmit={onSubmit}
        setSelectedGenres={setSelectedGenres}
      />
    </Dialog>
  );
};

export default EditMovieForm;
