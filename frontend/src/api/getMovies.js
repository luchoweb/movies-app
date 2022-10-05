const getMovies = async (page) => {
  const apiUrl = import.meta.env.VITE_API_MOVIES
  const response = await fetch(`${apiUrl}?page=${page || 1}`)
  const movies = await response.json()

  return movies
}

export default getMovies
