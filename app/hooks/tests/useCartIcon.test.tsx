import { act, cleanup, renderHook } from '@testing-library/react';
import { useCartIcon } from '@hooks/useCartIcon';

const mockData = [
  {
    id: 1,
    added: false
  },
  {
    id: 2,
    added: false
  }
];

const mockHook = () => {
  const hook = renderHook(() => useCartIcon());
  return hook.result.current;
};

let current: ReturnType<typeof mockHook>;

beforeEach(() => {
  current = mockHook();
});

afterEach(() => {
  cleanup();
});

describe('CartIcon', () => {
  test('initial data is correct', () => {
    expect(current.cartIcons.map(el => [el.id, el.added])).toEqual(
      mockData.map(el => [el.id, el.added])
    );
  });

  test('added firstIcon change correctly', () => {
    expect(current.cartIcons[0].added).toBe(false);
    expect(current.cartIcons[1].added).toBe(false);

    act(() => {
      current.setAdded(1);
    });

    expect(current.cartIcons[0].added).toBe(true);
    expect(current.cartIcons[1].added).toBe(false);
  });

  test('added secondIcon change correctly', () => {
    expect(current.cartIcons[0].added).toBe(false);
    expect(current.cartIcons[1].added).toBe(false);

    act(() => {
      current.setAdded(2);
    });

    expect(current.cartIcons[0].added).toBe(false);
    expect(current.cartIcons[1].added).toBe(true);
  });
});
