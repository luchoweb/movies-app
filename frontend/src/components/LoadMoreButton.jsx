import { useState } from 'react'

import useMovies from '../hooks/useMovies'
import getMovies from '../api/getMovies'
import { LOAD_MOVIES } from '../reducers/MoviesReducer'

import '../styles/components/LoadMoreButton.scss'

export default function LoadMoreButton() {
  const { dispatch } = useMovies()
  const [isLoading, setIsLoading] = useState(false)
  const [page, setPage] = useState(2)
  const [nextPage, setNextPage] = useState(true)

  const loadMoreMovies = async () => {
    setIsLoading(true)
  
    const query = document.getElementById('search-movie').value
    const movies = await getMovies({ page, query })
    
    if (movies) {
      dispatch({
        type: LOAD_MOVIES,
        payload: movies
      })

      if ( movies.length < 12 ) setNextPage(false)

      setIsLoading(false)
    }

    setPage(page + 1)
  }

  return nextPage && (
    <button 
      className='button-more'
      onClick={() => loadMoreMovies()}
      disabled={isLoading}
    >
      { isLoading ? 'Cargando...' : 'Cargar más películas'}
    </button>
  )
}
