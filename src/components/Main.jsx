import MoviesList from "./movies/MoviesList";

export default function Main() {
    return (
        <div className="container my-3">
            <h1 className="text-white fw-bold">Lista dei Film</h1>

            <label className="d-flex" htmlFor="">
                <h2 className="mx-3">Filtra per genere:</h2>
                <select className="form-select w-25">
                    <option value="">Tutti</option>
                    <option value="Fantascienza">Fantascienza</option>
                    <option value="Thriller">Thriller</option>
                    <option value="Romantico">Romantico</option>
                    <option value="Azione">Azione</option>
                </select>
            </label>

            <MoviesList />
        </div>
    )
}