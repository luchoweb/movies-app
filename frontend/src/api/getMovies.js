const apiUrl = import.meta.env.VITE_API_MOVIES

const getMovies = async ({ page = 1, limit = 12, query = '' }) => {
  const response = await fetch(`
    ${apiUrl}?query=${query}&page=${page}&limit=${limit}
  `)
  const movies = await response.json()

  return movies
}

export default getMovies
