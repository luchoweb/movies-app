import {beforeEach, describe, expect, test} from 'vitest';
import {render, screen} from '@testing-library/react';
import "@testing-library/jest-dom";
import { MoviesProvider } from '../../context/MoviesContext';

import SearchMovie from '../../components/SearchMovie';

describe("SearchMovie Component", () => {
  beforeEach(() => {
    render(
      <MoviesProvider>
        <SearchMovie />
      </MoviesProvider>
    );
  });

  test("it should be render the input", () => {
    expect(screen.getByTestId('search-input')).toBeTruthy();
  });

  test("it should be render the button", () => {
    expect(screen.getByTestId('search-button')).toBeTruthy();
  });
});
