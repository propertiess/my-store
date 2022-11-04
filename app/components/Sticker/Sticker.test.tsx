import { cleanup, render, screen } from '@testing-library/react';
import { Sticker } from '@/components';

afterEach(() => {
  cleanup();
});

describe('Sticker', () => {
  test('to be in the document', () => {
    render(<Sticker data-testid='sticker' value={1} />);
    expect(screen.queryByTestId('sticker')).toBeInTheDocument();
  });

  test('with value is equal 0 to be null', () => {
    render(<Sticker data-testid='sticker' value={0} />);
    expect(screen.queryByTestId('sticker')).toBeNull();
  });
});
