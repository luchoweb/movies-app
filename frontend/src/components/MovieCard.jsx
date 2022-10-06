import { useState } from 'react'

import '../styles/components/MovieCard.scss'

export default function MovieCard({ movie }) {
  const noPoster = 'https://via.placeholder.com/200x300.png?text=No+poster'
  const moviePoster = movie.poster === 'N/A' ? noPoster : movie.poster

  const [poster, setPoster] = useState(moviePoster)

  return (
    <div className="movie-card">
      <figure
        className="movie-card__poster"
        data-testid="movie-poster"
      >
        <img
          src={poster}
          alt={movie.title}
          onError={() => setPoster(noPoster)}
        />
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
