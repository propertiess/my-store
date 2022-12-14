import { cleanup, render, screen } from '@testing-library/react';
import { Products } from '@/components';
import { getMockProducts } from '@/helpers/getMockProducts';
import { IProduct } from '@/interfaces/product.interface';

const mockProducts: IProduct[] = getMockProducts();

beforeEach(() => {
  render(<Products products={mockProducts} />);
});

afterEach(() => {
  cleanup();
});

describe('Products component', () => {
  test('to be in the document & correctly render children', () => {
    const productListEl = screen.getByTestId('products-list');
    expect(productListEl).toBeInTheDocument();
    expect(productListEl.childElementCount).toBe(3);
  });
});
