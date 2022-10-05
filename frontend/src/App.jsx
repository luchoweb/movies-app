import MovieCard from './components/MovieCard'
import LoadMoreButton from './components/LoadMoreButton'

import './styles/App.scss'

function App() {
  return (
    <section className="movies">
      <div className="container">
        <h1 className="movies__title">
          2020 "Love" Movies
        </h1>

        <ul className="movies__list">
          <li className='movies__list-item'>
            <MovieCard />
          </li>

          <li className='movies__list-item'>
            <MovieCard />
          </li>

          <li className='movies__list-item'>
            <MovieCard />
          </li>

          <li className='movies__list-item'>
            <MovieCard />
          </li>
        </ul>

        <div className="movies__button-more">
          <LoadMoreButton />
        </div>
      </div>
    </section>
  )
}

export default App
