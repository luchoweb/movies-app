export const LOAD_MOVIES = 'LOAD_MOVIES'
export const SEARCH_MOVIES = 'SEARCH_MOVIES'

const MoviesReducer = (state, action) => {
  switch(action.type) {
    case LOAD_MOVIES:
      return [
        ...state,
        ...action.payload 
      ]
    case SEARCH_MOVIES:
      return [
        ...action.payload 
      ]
    default:
      return state
  }
}

export default MoviesReducer
