import { useState, useEffect} from "react";
import movies from "../data/movies";
import MoviesList from "./movies/MoviesList";

export default function Main() {

    // State per il genere selezionato
    const [selectedGenre, setSelectedGenre] = useState(``);

    // State per i film filtrati
    const [filteredMovies, setFilteredMovies] = useState(movies);

    // Aggiorno i film filtrati ogni volta che selectedGenre cambia
    useEffect(() => {
        if(selectedGenre === ``) {
            setFilteredMovies(movies);
        } else {
            setFilteredMovies(movies.filter(movie => movie.genre === selectedGenre))
        }
    }, [selectedGenre]);

    return (
        <div className="container my-3">
            <h1 className="text-white fw-bold">Lista dei Film</h1>

            <label className="d-flex" htmlFor="">
                <h2 className="text-white mx-3">Filtra per genere:</h2>
                <select className="form-select w-25" value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
                    <option value="">Tutti</option>
                    <option value="Fantascienza">Fantascienza</option>
                    <option value="Thriller">Thriller</option>
                    <option value="Romantico">Romantico</option>
                    <option value="Azione">Azione</option>
                </select>
            </label>

            <MoviesList movies={filteredMovies}/>
        </div>
    )
}