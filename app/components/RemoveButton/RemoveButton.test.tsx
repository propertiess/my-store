import { cleanup, render, screen } from '@testing-library/react';
import { RemoveButton } from '@/components';

beforeEach(() => {
  render(<RemoveButton id={1} type={'basket'} />);
});

afterEach(() => {
  cleanup();
});

describe('RemoveButton', () => {
  test('to be in the document', () => {
    expect(screen.getByTestId('remove-btn')).toBeInTheDocument();
  });
});
