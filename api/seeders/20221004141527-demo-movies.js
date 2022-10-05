'use strict';

const fetch = require('node-fetch');

module.exports = {
  up: async (queryInterface) => {
    const { API_KEY } = process.env;

    const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&s=Love&type=movie&y=2020`;

    console.log(`Fetching data from page #1`);
    const response = await fetch(API_URL);
    const moviesData = await response.json();

    let movies = [
      ...moviesData.Search
    ];

    const totalPages = Math.ceil(parseInt(moviesData.totalResults) / 10);

    for (let i = 2; i <= totalPages; i++) {
      console.log(`Fetching data from page #${i}`);

      const response = await fetch(`${API_URL}&page=${i}`);
      const moviesData = await response.json();

      movies = [
        ...movies,
        ...moviesData.Search
      ];
    }

    const formatMovies = movies.map(movie => {
      return {
        title: movie.Title,
        year: movie.Year,
        type: movie.Type,
        poster: movie.Poster,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    })

    console.log('Inserting data into the database...');
    return queryInterface.bulkInsert('Movies', formatMovies, {});
    
  },
  down: (queryInterface) => {
    queryInterface.bulkDelete('Movies', null, {});
  }
}
