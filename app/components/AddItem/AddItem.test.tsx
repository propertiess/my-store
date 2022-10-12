import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import AddItem from '@components/AddItem/AddItem';
import { IProduct } from '@interfaces/product.interface';

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
  render(<AddItem type='basket' product={mockProduct} />);
});

afterEach(() => {
  cleanup();
});

describe('AddItem', () => {
  test('be in the document', () => {
    const addItemEl = screen.getByTestId('add-item');
    expect(addItemEl).toBeInTheDocument();
  });

  test('title & price are correct', () => {
    screen.getByText(mockProduct.title);
    screen.getByText('$ ' + mockProduct.price);
  });

  test('counter products to be in the document', () => {
    const counterEl = screen.getByTestId('counter-product');
    expect(counterEl).toBeInTheDocument();
  });

  test('with type favourite counter products not to be in the document', () => {
    cleanup();
    render(<AddItem product={mockProduct} type='favourite' />);
    const counterEl = screen.queryByTestId('counter-product');
    expect(counterEl).not.toBeInTheDocument();
  });
});
