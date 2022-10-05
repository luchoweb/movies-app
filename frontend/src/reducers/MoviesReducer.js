export const LOAD_MOVIES = 'LOAD_MOVIES'
export const SEARCH_MOVIES = 'SEARCH_MOVIES'

const MoviesReducer = (state, action) => {
  switch(action.type) {
    case LOAD_MOVIES:
      const prevMovies = state?.movies ? state?.movies : []

      return {
        movies: [
          ...prevMovies,
          ...action.payload.movies
        ],
        page: action.payload.page,
        nextPage: action.payload.nextPage
      }
    case SEARCH_MOVIES:
      return {
        movies: [...action.payload.movies],
        page: action.payload.page,
        nextPage: action.payload.nextPage
      }
    default:
      return state
  }
}

export default MoviesReducer
