import { cleanup, render, screen } from '@testing-library/react';
import CustomMotion from '@/components/CustomMotion/CustomMotion';

beforeEach(() => {
  render(<CustomMotion data-testid='motion' element='div' />);
});

afterEach(() => {
  cleanup();
});

describe('CustomMotion', () => {
  test('be in the document', () => {
    const motionEl = screen.getByTestId('motion');
    expect(motionEl).toBeInTheDocument();
  });
});
