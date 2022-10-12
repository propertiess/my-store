import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import AddList from '@components/AddList/AddList';
import { mockProducts } from '@components/Products/Products.test';
import { IProduct } from '@interfaces/product.interface';

export const mockEmptyProducts: IProduct[] = [];

beforeEach(() => {
  render(
    <AddList
      title='Корзина'
      nothingTitle='В корзине пока пусто'
      type='basket'
      products={mockProducts}
    />
  );
});

afterEach(() => {
  cleanup();
});

describe('AddList', () => {
  test('to be in the document', () => {
    expect(screen.getByTestId('addList')).toBeInTheDocument();
  });

  test('data is correct', () => {
    screen.getByText('Корзина');
    const addListEl = screen.getByTestId('addList');
    expect(addListEl.childElementCount).toBe(2);
    expect(screen.getByTestId('list-addItem').childElementCount).toBe(3);
    cleanup();

    render(
      <AddList
        title='Корзина'
        nothingTitle='В корзине пока пусто'
        type='basket'
        products={mockEmptyProducts}
      />
    );

    screen.getByText('В корзине пока пусто');
    expect(screen.getByTestId('list-addItem').childElementCount).toBe(0);
  });
});