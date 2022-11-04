import { act, cleanup, renderHook } from '@testing-library/react';
import { ReactNode } from 'react';
import { PurchasesProvider } from '@/context/PurchasesContext';
import { usePurchases } from '@/hooks/usePurchases';
import { IProduct } from '@/interfaces/product.interface';

const mockProduct: IProduct = {
  id: 1,
  amount: 1,
  title: 'Test',
  price: 100,
  image: 'image.com',
  rating: {
    rate: 4,
    count: 130
  },
  description: 'test desc',
  category: 'category test'
};

const wrapper = ({ children }: { children: ReactNode }) => (
  <PurchasesProvider>{children}</PurchasesProvider>
);

const mockHook = () => {
  const { result } = renderHook(() => usePurchases(), { wrapper });
  return result;
};

let result: ReturnType<typeof mockHook>;

beforeEach(() => {
  result = mockHook();
});

afterAll(cleanup);

describe('Purchases', () => {
  test('defined', () => {
    expect(result.current.basket).toBeDefined();
    expect(result.current.favorite).toBeDefined();
  });

  test('have props products, which is equal []', () => {
    expect(result.current.basket.products).toEqual([]);
    expect(result.current.favorite.products).toEqual([]);
  });

  test('getFinalSum work correctly', () => {
    expect(parseInt(result.current.getFinalSum.toString())).toBe(0);

    act(() => {
      result.current.addToBasket(mockProduct);
    });
    expect(result.current.getFinalSum).toBe(100);

    act(() => {
      result.current.setAmountBasketProduct(1, 6);
    });
    expect(result.current.getFinalSum).toBe(600);

    act(() => {
      result.current.setAmountBasketProduct(1, 1);
    });

    act(() => {
      result.current.removeFromBasket(1);
    });
  });
});

describe('Favorite', () => {
  test('added products correctly', () => {
    expect(result.current.favorite.products.length).toBe(0);

    act(() => {
      result.current.addToFavorite(mockProduct);
    });
    expect(result.current.favorite.products.length).toBe(1);
    expect(result.current.favorite.products[0]).toEqual(mockProduct);

    act(() => {
      result.current.addToFavorite(mockProduct);
    });
    expect(result.current.favorite.products.length).toBe(2);

    expect(result.current.favorite.products).toEqual([
      { ...mockProduct },
      { ...mockProduct }
    ]);
  });

  test('remove products correctly', () => {
    act(() => {
      result.current.addToFavorite(mockProduct);
    });

    act(() => {
      result.current.removeFromFavorite(1);
    });
    expect(result.current.favorite.products).toEqual([]);
  });
});

describe('Basket', () => {
  test('added products correctly', () => {
    expect(result.current.basket.products.length).toBe(0);

    act(() => {
      result.current.addToBasket(mockProduct);
    });
    expect(result.current.basket.products.length).toBe(1);
    expect(result.current.basket.products[0]).toEqual(mockProduct);

    act(() => {
      result.current.addToBasket(mockProduct);
    });
    expect(result.current.basket.products.length).toBe(2);

    expect(result.current.basket.products).toEqual([
      { ...mockProduct },
      { ...mockProduct }
    ]);
  });

  test('remove products correctly', () => {
    act(() => {
      result.current.addToBasket(mockProduct);
    });

    act(() => {
      result.current.removeFromBasket(1);
    });
    expect(result.current.basket.products).toEqual([]);
  });

  test('change amount of products correctly', () => {
    act(() => {
      result.current.addToBasket(mockProduct);
    });
    expect(result.current.basket.products[0].amount).toBe(1);

    act(() => {
      result.current.setAmountBasketProduct(1, 2);
    });
    expect(result.current.basket.products[0].amount).toBe(2);

    act(() => {
      result.current.setAmountBasketProduct(1, 5);
    });
    expect(result.current.basket.products[0].amount).toBe(5);

    act(() => {
      result.current.setAmountBasketProduct(1, 0);
    });
    expect(result.current.basket.products.length).toBe(0);
    expect(result.current.basket.products).toEqual([]);
  });
});
