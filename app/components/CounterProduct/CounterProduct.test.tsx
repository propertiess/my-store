import { cleanup, render, screen } from '@testing-library/react';
import CounterProduct from '@components/CounterProduct/CounterProduct';

beforeEach(() => {
  render(<CounterProduct id={1} amount={1} />);
});

afterEach(() => {
  cleanup();
});

describe('CounterProduct', () => {
  test('to be in the document', () => {
    const counterEl = screen.getByTestId('counter-product');
    expect(counterEl).toBeInTheDocument();
  });
});
