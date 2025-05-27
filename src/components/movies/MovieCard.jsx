export default function MovieCard({ movie }) {
    return (
        <div className="col">
            <div className="card">
                <div className="card-header bg-primary text-white fw-bold">{movie.title}</div>
                <div className="card-body bg-light text-dark fw-bold">{movie.genre}</div>
            </div>
        </div>
    )
}