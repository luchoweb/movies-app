import { useContext } from 'react'
import { MoviesContext } from '../context/MoviesContext'

const useMovies = () => useContext(MoviesContext)

export default useMovies
