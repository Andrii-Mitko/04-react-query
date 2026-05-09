import { useState } from "react";
import MovieGrid from "../MovieGrid/MovieGrid";
import MovieModal from "../MovieModal/MovieModal";
import SearchBar from "../SearchBar/SearchBar";
import { fetchMovies } from "../../services/movieService";
import type { Movie } from "../../types/movie";
import { useQuery } from "@tanstack/react-query";
import Pagination from "../Pagination/Pagination";

export default function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const handleSearch = (value: string) => {
    setQuery(value);
    setPage(1);
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["movies", query, page],
    queryFn: () => fetchMovies(query, page),
    enabled: Boolean(query.trim()),
  });

  const movies = data?.results ?? [];
  const totalPages = data?.total_pages ?? 1;

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />

      {isLoading && <p>Loading...</p>}
      {isError && <p>Oopss...</p>}
      {!isLoading && movies.length === 0 && query && <p>No movies</p>}

      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}

      {movies.length > 0 && (
        <>
          <MovieGrid movies={movies} onSelect={setSelectedMovie} />
          <Pagination totalPages={totalPages} page={page} setPage={setPage} />
        </>
      )}
    </div>
  );
}
