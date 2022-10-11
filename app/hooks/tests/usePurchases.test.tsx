import '@testing-library/jest-dom';
import { usePurchases } from '../usePurchases';
import { act, cleanup, renderHook } from '@testing-library/react';
import { PurchasesProvider } from '../../context/PurchasesContext';
import { ReactNode } from 'react';
import { afterEach } from '@jest/globals';
import { IProduct } from '../../types/product.interface';

const productMock: IProduct = {
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

afterEach(() => {
  cleanup();
});

describe('Purchases', () => {
  test('defined', () => {
    expect(result.current.basket).toBeDefined();
    expect(result.current.favourite).toBeDefined();
  });

  test('have props products, which is equal []', () => {
    expect(result.current.basket.products).toEqual([]);
    expect(result.current.favourite.products).toEqual([]);
  });
});

describe('Basket & Favourite', () => {
  test('added products correctly', () => {
    expect(result.current.basket.products.length).toBe(0);
    expect(result.current.favourite.products.length).toBe(0);

    act(() => {
      result.current.addToBasket(productMock);
    });

    act(() => {
      result.current.addToFavourite(productMock);
    });

    expect(result.current.basket.products.length).toBe(1);
    expect(result.current.favourite.products.length).toBe(1);

    expect(result.current.basket.products[0]).toEqual(productMock);
    expect(result.current.favourite.products[0]).toEqual(productMock);

    act(() => {
      result.current.addToBasket(productMock);
    });
    expect(result.current.basket.products.length).toBe(2);

    act(() => {
      result.current.addToFavourite(productMock);
    });
    expect(result.current.favourite.products.length).toBe(2);

    expect(result.current.basket.products).toEqual([
      { ...productMock },
      { ...productMock }
    ]);
    expect(result.current.favourite.products).toEqual([
      { ...productMock },
      { ...productMock }
    ]);
  });

  test('remove products correctly', () => {
    act(() => {
      result.current.addToBasket(productMock);
    });

    act(() => {
      result.current.addToFavourite(productMock);
    });

    act(() => {
      result.current.removeFromBasket(1);
    });
    expect(result.current.basket.products).toEqual([]);

    act(() => {
      result.current.removeFromFavourite(1);
    });
    expect(result.current.favourite.products).toEqual([]);
  });
});

describe('Basket', () => {
  test('change amount of products correctly', () => {
    act(() => {
      result.current.addToBasket(productMock);
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
