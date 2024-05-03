import styles from "./MovieImage.module.css";
import Image from "next/image";

export default function MovieImage({ urlImage }) {
  return (
    <Image
      className={`card-img-top`}
      src={urlImage}
      alt="Movie poster"
      width={400}
      height={300}
      priority={true}
    />
  );
}
