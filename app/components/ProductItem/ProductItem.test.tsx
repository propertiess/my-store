import { cleanup, render, screen } from '@testing-library/react';
import ProductItem from '@/components/ProductItem/ProductItem';
import { IProduct } from '@/interfaces/product.interface';

const mockProduct: IProduct = {
  id: 1,
  title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  price: 109.95,
  description:
    'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
  category: "men's clothing",
  image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  rating: { rate: 3.9, count: 120 }
};

beforeEach(() => {
  render(<ProductItem product={mockProduct} />);
});

afterEach(() => {
  cleanup();
});

describe('ProductItem', () => {
  test('to be in the document', () => {
    const productItem = screen.getByTestId('product-item');
    expect(productItem).toBeInTheDocument();
  });

  test('title & price & rate are correctly', () => {
    const title = screen.queryByText(mockProduct.title);
    expect(title).toBeInTheDocument();
    screen.getByText('$ ' + mockProduct.price);
    const starsEl = screen.getAllByTestId('stars');
    expect(starsEl.length).toBe(4);
  });
});
