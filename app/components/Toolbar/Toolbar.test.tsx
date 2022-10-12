import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import Toolbar from '@components/Toolbar/Toolbar';

beforeEach(() => {
  render(<Toolbar />);
});

afterEach(() => {
  cleanup();
});

describe('Toolbar', () => {
  test('be in the document', () => {
    expect(screen.getByTestId('toolbar')).toBeInTheDocument();
  });

  test('list render icons correctly', () => {
    const listEl = screen.getByTestId('toolbar-list');
    expect(listEl.childElementCount).toBe(5);
  });
});