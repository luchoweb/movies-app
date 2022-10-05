import { useEffect, useState } from 'react'
import useMovies from './hooks/useMovies'
import { LOAD_MOVIES } from './reducers/moviesReducer'
import getMovies from './api/getMovies'

import MovieCard from './components/MovieCard'
import LoadMoreButton from './components/LoadMoreButton'

import './styles/App.scss'

function App() {
  const { state: movies, dispatch } = useMovies()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await getMovies()

      if (movies) {
        dispatch({
          type: LOAD_MOVIES,
          payload: movies
        })

        setIsLoading(false)
      }
    }

    if ( !movies?.length ) fetchMovies()

  }, [])

  return (
    <section className="movies">
      <div className="container">
        <h1 className="movies__title">
          2020 "Love" Movies
        </h1>

        <ul className="movies__list">
          {
            isLoading 
            ? (
              <li>Loading movies, please wait...</li>
            ) 
            : movies?.length ? movies.map(movie => (
              <li className='movies__list-item' key={`k-${movie.id}`}>
                <MovieCard movie={movie} />
              </li>
            )) 
            : (
              <p>Error.</p>
            )
          }
        </ul>

        <div className="movies__button-more">
          <LoadMoreButton />
        </div>
      </div>
    </section>
  )
}

export default App
