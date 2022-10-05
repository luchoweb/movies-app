import { createContext, useReducer } from 'react'
import MoviesReducer from '../reducers/MoviesReducer'

const MoviesContext = createContext()

const MoviesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MoviesReducer, {})

  return (
    <MoviesContext.Provider value={{ state, dispatch }}>
      { children }
    </MoviesContext.Provider>
  )
}

export {
  MoviesContext,
  MoviesProvider
}
