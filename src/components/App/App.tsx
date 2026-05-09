import css from "./App.module.css";
import MovieGrid from "../MovieGrid/MovieGrid";
import { useState } from "react";
import MovieModal from "../MovieModal/MovieModal";
import SearchBar from "../SearchBar/SearchBar";
import { fetchMovies } from "../../services/movieService";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import type { Movie } from "../../types/movie";
import toast from "react-hot-toast";

export default function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (topic: string) => {
    try {
      setIsLoading(true);
      setError(false);

      console.log("BEFORE FETCH");
      setMovies([]);
      const data = await fetchMovies(topic);

      if (data.results.length === 0) {
        toast("No movies found for your request.");
      }

      console.log("DATA:", data);

      setMovies(data.results);
    } catch (err) {
      console.log("ERROR:", err);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={css.app}>
      <SearchBar onSubmit={handleSearch} />

      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}

      {isLoading && <Loader />}

      {error && <ErrorMessage />}

      {!isLoading && !error && movies.length > 0 && (
        <MovieGrid
          movies={movies}
          onSelect={(movie) => setSelectedMovie(movie)}
        />
      )}
    </div>
  );
}
