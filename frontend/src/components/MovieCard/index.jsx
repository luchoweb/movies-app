import './styles.scss'

export default function MovieCard( movie ) {
  const m = {
    "id": 1,
    "title": "Love and Monsters",
    "year": "2020",
    "type": "movie",
    "poster": "https://m.media-amazon.com/images/M/MV5BYWVkMWEyMDUtZTVmOC00MTYxLWE1ZTUtNjk4M2IzMjY2OTIxXkEyXkFqcGdeQXVyMDk5Mzc5MQ@@._V1_SX300.jpg",
  }
  return (
    <div className="movie-card">
      <figure className="movie-card__poster">
        <img src={m.poster} alt={m.title} />
      </figure>

      <div className="movie-card__details">
        <h5 className="movie-card__title">
          { m.title }
        </h5>

        <p className='movie-card__more'>
          { m.type } // { m.year }
        </p>
      </div>
    </div>
  )
}
