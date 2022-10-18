import { act, cleanup, renderHook } from '@testing-library/react';
import { useModal } from '@hooks/useModal';

afterEach(() => cleanup());

describe('Modal', () => {
  test('isShow equal initialState', () => {
    const { result } = renderHook(() => useModal(false));
    expect(result.current.isShow).toBe(false);
  });

  test('toggle works correctly', () => {
    const { result } = renderHook(() => useModal(false));

    act(() => {
      result.current.toggleShow();
    });
    expect(result.current.isShow).toBe(true);

    for (let i = 0; i < 3; i++) {
      act(() => {
        result.current.toggleShow();
      });
    }
    expect(result.current.isShow).toBe(false);
  });
});
