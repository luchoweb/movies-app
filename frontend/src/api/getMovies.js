const getMovies = async (page = 1, limit = 12) => {
  const apiUrl = import.meta.env.VITE_API_MOVIES
  const response = await fetch(`${apiUrl}?page=${page}&limit=${limit}`)
  const movies = await response.json()

  return movies
}

export default getMovies
