export default function MovieCard({ movie }) {
    return (
        <div className="col">
            <div className="card">
                <div className="card-header bg-primary text-white fw-bold fs-5">{movie.genre}</div>
                <div className="card-body bg-light text-dark fw-bold fs-4">{movie.title}</div>
            </div>
        </div>
    )
}