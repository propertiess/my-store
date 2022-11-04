import { cleanup, render, screen } from '@testing-library/react';
import { StarList } from '@/components';

afterEach(() => {
  cleanup();
});

describe('StarList', () => {
  test('to be in the document', () => {
    render(<StarList data-testid='star-list' quantity={[1]} />);
    expect(screen.queryByTestId('star-list')).toBeInTheDocument();
  });

  test('have children correctly', () => {
    render(<StarList data-testid='star-list' quantity={[1]} />);
    expect(screen.getByTestId('star-list').childElementCount).toBe(1);
    cleanup();
    render(<StarList data-testid='star-list' quantity={[1, 2, 3]} />);
    expect(screen.getByTestId('star-list').childElementCount).toBe(3);
  });
});
