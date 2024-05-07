"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Dialog from "@/app/components/dialog/Dialog";
import MovieForm from "@/app/components/movieForm/MovieForm";
import { ToDto } from "../../lib/Utility";

const AddMovieForm = () => {
  const router = useRouter();
  let [selectedGenres, setSelectedGenres] = useState([]);

  const onCloseModal = () => {
    router.push("/dashboard");
  };

  const onSubmit = (data) => {
    if (selectedGenres.length === 0) {
      alert("At least one genre must be selected");
      return;
    }

    let body = ToDto(data, selectedGenres);

    fetch("http://localhost:4000/movies", {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((movie) => {
        router.push("/dashboard/" + movie.id);
      });
  };

  return (
    <Dialog isOpen={true} title={"Add Movie"} closePortal={onCloseModal}>
      <MovieForm
        movie={null}
        onSubmit={onSubmit}
        setSelectedGenres={setSelectedGenres}
      />
    </Dialog>
  );
};

export default AddMovieForm;
