import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import Header from '@components/Header/Header';

beforeEach(() => {
  render(<Header />);
});

afterEach(() => {
  cleanup();
});

describe('Header', () => {
  test('to be in the document', () => {
    const headerEl = screen.getByTestId('header');
    expect(headerEl).toBeInTheDocument();
  });

  test('title is correct', () => {
    const title = screen.queryByText(/My store/i);
    expect(title).toBeInTheDocument();
  });

  test('list render children correctly', () => {
    const ulEl = screen.getByRole('list');
    expect(ulEl.childElementCount).toBe(2);
  });
});
