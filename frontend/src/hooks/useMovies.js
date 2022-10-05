import { useContext } from 'react'
import { MoviesContext } from '../context/moviesContext'

const useMovies = () => useContext(MoviesContext)

export default useMovies
