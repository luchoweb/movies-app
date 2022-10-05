import { useState } from 'react'
import useMovies from '../hooks/useMovies'
import getMovies from '../api/getMovies'
import { LOAD_MOVIES } from '../reducers/MoviesReducer'

import '../styles/components/SearchMovie.scss'

const SearchMovie = () => {
  const { dispatch } = useMovies()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  const searchMovies = async () => {
    setIsLoading(true)
  
    const query = document.getElementById('search-movie').value
    const movies = await getMovies({ query })

    console.log(movies)

    if ( !movies.errorCode ) {
      dispatch({
        type: LOAD_MOVIES,
        payload: movies
      })
    } else {
      setError(true)
    }

    setPage(currentPage)
    setIsLoading(false)
  }

  return (
    <div className="search">
      <input type="text" id="search-movie" className="search__input" placeholder="Buscar película" />
      <button className="search__button" onClick={() => searchMovies()}>Buscar</button>
    </div>
  )
}

export default SearchMovie