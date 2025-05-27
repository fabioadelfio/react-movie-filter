import react, { useState, useEffect} from "react";
import { initialMovies } from '../data/movies';
import MoviesList from "./movies/MoviesList";

export default function Main() {

    // State principale
    const [movies, setMovies] = useState(initialMovies)

    // State per il genere selezionato
    const [selectedGenre, setSelectedGenre] = useState(``);

    // State per i film filtrati per genere
    const [filteredMovies, setFilteredMovies] = useState(movies);

    // State per i film filtrati per il titolo
    const [titleFilter, setTitleFilter] = useState(``);

    // States per aggiungere un nuovo film alla lista
    const [newTitle, setNewTitle] = useState(``);
    const [newGenre, setNewGenre] = useState(``);

    // Aggiorno i film filtrati ogni volta che selectedGenre cambia
    useEffect(() => {
        if(selectedGenre === ``) {
            setFilteredMovies(movies);
        } else {
            setFilteredMovies(movies.filter(movie => movie.genre === selectedGenre))
        }
    }, [movies, selectedGenre]);

    useEffect(() => {
        const newFilteredMovies = movies.filter((movie) => 
            movie.title.toLowerCase().includes(titleFilter.toLowerCase())
        );

        setFilteredMovies(newFilteredMovies)


    }, [movies, titleFilter])

    const handleAddMovie = (e) => {
        e.preventDefault();

        if(newTitle === `` || newGenre === ``) return;

        const newMovie = {title: newTitle, genre: newGenre};
        setMovies([...movies, newMovie]);
        setNewTitle(``);
        setNewGenre(``);
    };

    return (
        <div className="container my-3">
            <h1 className="text-white fw-bold text-center">Lista dei Film</h1>

            <label className="d-flex align-items-center my-3" htmlFor="">
                <h2 className="text-white w-50">Filtra per genere:</h2>
                <select className="form-select" value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
                    <option value="">Tutti i film</option>
                    <option value="Fantascienza">Fantascienza</option>
                    <option value="Thriller">Thriller</option>
                    <option value="Romantico">Romantico</option>
                    <option value="Azione">Azione</option>
                </select>

            </label>

            <label className="d-flex align-items-center">
                <h2 className="text-white w-50">Cerca per titolo:</h2>
                <input 
                    value={filteredMovies.title} 
                    onChange={(e) => setTitleFilter(e.target.value)} 
                    className="form-control" 
                    type="text" 
                    placeholder="Cerca Film..."
                />
            </label>

            <div className="card my-4">
                <h2 className="card-header text-white">Aggiungi Film:</h2>
                <div className="card-body">
                    <form onSubmit={handleAddMovie} className="d-flex gap-3">
                        <input className="form-control" type="text" placeholder="Titolo..." value={newTitle} onChange={(e) => setNewTitle(e.target.value)}/>
                        <input className="form-control" type="text" placeholder="Genere..." value={newGenre} onChange={(e) => setNewGenre(e.target.value)}/>
                        <button className="btn btn-primary" type="submit">Aggiungi</button>
                    </form>
                </div>
            </div>

            <MoviesList movies={filteredMovies}/>
            

        </div>
    )
}