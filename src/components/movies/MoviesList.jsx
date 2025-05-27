import MovieCard from "./MovieCard";

export default function MoviesList({ movies }) {
    return (
        <div className="row row-cols-3 g-3 my-3">
            {movies.map((movie, index) => (
                <MovieCard key={index} movie={movie} />
            ))}
        </div>
    )
}