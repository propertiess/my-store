import { cleanup, render, screen } from '@testing-library/react';
import Toolbar from '@/components/Toolbar/Toolbar';

beforeEach(() => {
  render(<Toolbar />);
});

afterEach(() => {
  cleanup();
});

describe('Toolbar', () => {
  test('renders', () => {
    expect(screen.getByTestId('toolbar')).toBeInTheDocument();
  });

  test('list render icons correctly', () => {
    const listEl = screen.getByTestId('toolbar-list');
    expect(listEl.childElementCount).toBe(4);
  });
});
