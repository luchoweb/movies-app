import '../styles/components/MovieCard.scss'

export default function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <figure className="movie-card__poster">
        <img src={movie.poster} alt={movie.title} />
      </figure>

      <div className="movie-card__details">
        <h5 className="movie-card__title">
          { movie.title }
        </h5>

        <p className='movie-card__more'>
          { movie.type } // { movie.year }
        </p>
      </div>
    </div>
  )
}
