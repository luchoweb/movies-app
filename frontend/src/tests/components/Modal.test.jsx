import {beforeEach, describe, expect, test} from 'vitest';
import {render, screen} from '@testing-library/react';
import Modal from '../../components/Modal'
import "@testing-library/jest-dom";

describe("Accordion", () => {
  const modalInfo = {
    title: 'Mock Title',
    message: 'Mock Message'
  };

  beforeEach(() => {
    render(<Modal data={modalInfo} />);
  });

  test("it should be render the modal title", () => {
    expect(screen.getByText(/Mock Title/i)).toBeInTheDocument();
  });

  test("it should be render the modal message", () => {
    expect(screen.getByText(/Mock Message/i)).toBeInTheDocument();
  });

  test("it should be render the modal button", () => {
    expect(screen.getByTestId('modal-button')).toBeTruthy();
  });
});
