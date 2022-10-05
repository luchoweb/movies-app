export const LOAD_MOVIES = 'LOAD_MOVIES'

const MoviesReducer = (state, action) => {
  switch(action.type) {
    case LOAD_MOVIES:
      return [
        ...state,
        ...action.payload 
      ]
    default:
      return state
  }
}

export default MoviesReducer
