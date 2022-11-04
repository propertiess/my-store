import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { Search } from '@/components';

beforeEach(() => {
  render(<Search searchQuery={() => {}} />);
});

afterEach(() => {
  cleanup();
});

describe('Search', () => {
  test('to be in the document', () => {
    expect(screen.queryByTestId('form')).toBeInTheDocument();
  });

  test('placeholder works correctly', () => {
    const inputEl: HTMLInputElement = screen.getByTestId('form-input');
    expect(inputEl.placeholder).toMatch(/Что хотите найти?/i);
  });

  test('type text works correctly', () => {
    const inputEl: HTMLInputElement = screen.getByTestId('form-input');
    expect(inputEl.value).toMatch('');

    fireEvent.change(inputEl, {
      target: {
        value: 'T-shirt'
      }
    });

    expect(inputEl.value).toMatch(/t-shirt/i);
  });
});
