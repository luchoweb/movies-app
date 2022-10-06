import {beforeEach, describe, expect, test} from 'vitest';
import {render, screen} from '@testing-library/react';
import MovieCard from '../../components/MovieCard'
import "@testing-library/jest-dom";

describe("MovieCard Component", () => {

  const movie = {
    title: 'Mock Movie',
    year: 2022,
    type: 'Mock Type',
    poster: 'mock.jpg'
  };

  beforeEach(() => {
    render(<MovieCard movie={movie} />);
  });

  test("it should be render the movie title", () => {
    expect(screen.getByText(/Mock Movie/i)).toBeInTheDocument();
  });

  test("it should be render the movie year", () => {
    expect(screen.getByText(/2022/i)).toBeInTheDocument();
  });

  test("it should be render the movie type", () => {
    expect(screen.getByText(/Mock Type/i)).toBeInTheDocument();
  });

  test("it should be render the movie poster", () => {
    expect(screen.getByTestId('movie-poster')).toBeTruthy();
  });
});
