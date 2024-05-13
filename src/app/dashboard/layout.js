"use client";
import MoviesContainer from "../components/moviesContainer/MoviesContainer";
import { usePathname, useSearchParams } from "next/navigation";

export default async function DashboardLayout(props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams.get("query");
  let activeGenre = "";
  let urlRequest =
    "http://localhost:4000/movies?limit=30&sortBy=release_date&sortOrder=desc";
  if (search) {
    urlRequest = `http://localhost:4000/movies?search=${search}&searchBy=title&limit=30&sortBy=release_date&sortOrder=desc`;
  } else if (pathname.includes("genre")) {
    activeGenre = pathname.split("/")[3];
    urlRequest = `http://localhost:4000/movies?filter=${activeGenre}&limit=30&sortBy=release_date&sortOrder=desc`;
  }

  const content = (
    <>
      <div className="container">{props.children}</div>
      <MoviesContainer
        activeGenre={activeGenre}
        sortedBy={"Title"}
        urlRequest={urlRequest}
      />
      <div className="row justify-content-md-center p-3 footer">
        <div className="col-md-auto">
          <span className="textlogo">netflix</span>
          <span className="textlogo2">roulette</span>
        </div>
      </div>
    </>
  );

  return content;
}
