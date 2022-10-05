import { useState } from 'react'

import useMovies from '../hooks/useMovies'
import getMovies from '../api/getMovies'
import { LOAD_MOVIES } from '../reducers/MoviesReducer'

import '../styles/components/LoadMoreButton.scss'

export default function LoadMoreButton() {
  const { dispatch } = useMovies()
  const [isLoading, setIsLoading] = useState(false)
  const [page, setPage] = useState(1)

  const loadMoreMovies = async () => {
    setIsLoading(true)
  
    const currentPage = page + 1
    const query = document.getElementById('search-movie').value
    const movies = await getMovies({ page: currentPage, query })
    
    if (movies) {
      dispatch({
        type: LOAD_MOVIES,
        payload: movies
      })

      setIsLoading(false)
    }

    setPage(currentPage)
  }

  return (
    <button 
      className='button-more'
      onClick={() => loadMoreMovies()}
      disabled={isLoading}
    >
      { isLoading ? 'Cargando...' : 'Cargar más películas'}
    </button>
  )
}
