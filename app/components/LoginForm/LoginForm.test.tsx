import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import LoginForm from '@/components/LoginForm/LoginForm';

beforeEach(() => {
  render(<LoginForm />);
});

afterEach(() => {
  cleanup();
});

describe('Login form', () => {
  test('renders', () => {
    const formEl = screen.getByTestId('form');
    expect(formEl).toBeInTheDocument();
  });
});

describe('username field', () => {
  test('placeholder is correct', () => {
    const userNameEl: HTMLInputElement = screen.getByTestId('username');
    expect(userNameEl.placeholder).toMatch(/username/i);
  });

  test('value works correctly', () => {
    const userNameEl: HTMLInputElement = screen.getByTestId('username');
    fireEvent.change(userNameEl, {
      target: {
        value: 'matthew'
      }
    });

    expect(userNameEl.value).toMatch(/matthew/i);
  });
});

describe('password field', () => {
  test('password placeholder is correct', () => {
    const passWordEl: HTMLInputElement = screen.getByTestId('password');
    expect(passWordEl.placeholder).toMatch(/password/i);
  });

  test('value works correctly', () => {
    const passWordEl: HTMLInputElement = screen.getByTestId('password');
    fireEvent.change(passWordEl, {
      target: {
        value: '123456'
      }
    });

    expect(passWordEl.value).toMatch(/123456/i);
  });
});
