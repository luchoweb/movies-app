import { useState } from 'react'

import useMovies from '../hooks/useMovies'
import getMovies from '../api/getMovies'
import { LOAD_MOVIES } from '../reducers/MoviesReducer'

import '../styles/components/LoadMoreButton.scss'
import { useEffect } from 'react'

export default function LoadMoreButton() {
  const { state, dispatch } = useMovies()
  const [isLoading, setIsLoading] = useState(false)

  const loadMoreMovies = async () => {
    setIsLoading(true)

    const page = state?.page + 1
  
    const query = document.getElementById('search-movie').value
    const movies = await getMovies({ page, query })
    
    if ( !movies.errorCode ) {
      dispatch({
        type: LOAD_MOVIES,
        payload: {
          movies,
          page,
          nextPage: movies.length >= 12
        }
      })
    }

    setIsLoading(false)
  }

  return (
    <button 
      className='button-more'
      onClick={() => loadMoreMovies()}
      disabled={isLoading || !state?.nextPage}
    >
      { state?.nextPage ? 'Cargar más películas' : 'No hay más películas'}
    </button>
  )
}
