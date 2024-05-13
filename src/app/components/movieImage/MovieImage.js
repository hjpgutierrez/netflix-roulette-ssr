import Image from "next/image";

export default function MovieImage({ urlImage }) {
  let imgSrc =
    "https://w7.pngwing.com/pngs/116/765/png-transparent-clapperboard-computer-icons-film-movie-poster-angle-text-logo-thumbnail.png";
  if (urlImage) {
    imgSrc = urlImage;
  }

  return (
    <Image
      className={`card-img-top`}
      src={imgSrc}
      alt="Movie poster"
      width={400}
      height={300}
      priority={true}
    />
  );
}
