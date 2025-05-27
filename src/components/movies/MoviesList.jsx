import MovieCard from "./MovieCard";
import movies from "../../data/movies";

export default function MoviesList({ movie }) {
    return (
        <div className="row row-cols-3 g-3">
            {movies.map((movie, index) => (
                <MovieCard key={index} movie={movie} />
            ))}
        </div>
    )
}