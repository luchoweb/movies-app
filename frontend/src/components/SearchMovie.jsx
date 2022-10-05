import { useState } from 'react'
import useMovies from '../hooks/useMovies'
import getMovies from '../api/getMovies'
import { SEARCH_MOVIES } from '../reducers/MoviesReducer'

import '../styles/components/SearchMovie.scss'

const SearchMovie = () => {
  const { dispatch } = useMovies()
  const [isLoading, setIsLoading] = useState(false)

  const searchMovies = async () => {
    setIsLoading(true)

    const query = encodeURI(document.getElementById('search-movie').value)
    const movies = await getMovies({ query })

    if ( !movies.errorCode ) {
      dispatch({
        type: SEARCH_MOVIES,
        payload: {
          movies,
          page: 1,
          nextPage: movies?.length >= 12
        }
      })
    }

    setIsLoading(false)
  }

  return (
    <div className="search">
      <input type="text" id="search-movie" className="search__input" placeholder="Buscar película" />
      <button
        className="search__button"
        onClick={() => searchMovies()}
        disabled={isLoading}
      >
        { isLoading ? 'Buscando...' : 'Buscar'}
      </button>
    </div>
  )
}

export default SearchMovie
