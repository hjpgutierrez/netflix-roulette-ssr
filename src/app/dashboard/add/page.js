"use client";
import { useState } from "react";
import Dialog from "../../components/dialog/Dialog";
import MovieForm from "../../components/movieForm/MovieForm";
import { useRouter } from "next/navigation";

const AddMovieForm = () => {
  const router = useRouter();
  let [selectedGenres, setSelectedGenres] = useState([]);
  console.log("Hola");
  const onSubmit = (data) => {
    /*    if (selectedGenres.length === 0) {
        alert("At least one genre must be selected");
        return;
      }

      let body = ToDto(data, selectedGenres);

      axios.post("http://localhost:4000/movies", body).then((response) => {
        if (response.status === 201) {
          navigate(`/${response.data.id}` + getCurrentQueryParams());
        } else {
          console.log(response);
        }
      }); */
  };

  const onCloseModal = () => {
    router.push("/dashboard");
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
