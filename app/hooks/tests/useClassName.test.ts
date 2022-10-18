import { act, cleanup, renderHook } from '@testing-library/react';
import { useClassName } from '@hooks/useClassName';

afterEach(() => {
  cleanup();
});

describe('ClassName', () => {
  test('default state is correct', () => {
    const { result } = renderHook(() => useClassName('mainClass', 'addClass'));
    expect(result.current.currClassName).toBe('mainClass');
  });

  test('toggleClassList works correctly', () => {
    const { result } = renderHook(() => useClassName('mainClass', 'addClass'));

    act(() => {
      result.current.toggle();
    });
    expect(result.current.currClassName).toBe('mainClass addClass');

    for (let i = 0; i < 2; i++) {
      act(() => {
        result.current.toggle();
      });
    }

    expect(result.current.currClassName).toBe('mainClass addClass');
  });
});
