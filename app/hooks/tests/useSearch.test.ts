import { act, cleanup, renderHook } from '@testing-library/react';
import { getMockProducts } from '@/helpers/getMockProducts';
import { useSearch } from '@/hooks/useSearch';

const mockProducts = getMockProducts();

afterEach(() => {
  cleanup();
});

describe('Search', () => {
  test('initial data the same', () => {
    const { result } = renderHook(() => useSearch(mockProducts));
    expect(result.current.searchProducts).toEqual(mockProducts);
  });

  test('filter works correctly', async () => {
    const { result } = renderHook(() => useSearch(mockProducts));

    const prepareProducts = [...mockProducts].filter(el =>
      el.title.toLowerCase().includes('me'.toLowerCase())
    );

    act(() => {
      result.current.searchQuery('me');
    });
    expect(result.current.searchProducts.length).toBe(3);
    await new Promise(r => setTimeout(r, 1000));

    expect(result.current.searchProducts.length).toBe(2);
    expect(result.current.searchProducts).toEqual(prepareProducts);
  });
});
