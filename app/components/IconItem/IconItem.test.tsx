import { cleanup, render, screen } from '@testing-library/react';
import IconItem from '@components/IconItem/IconItem';
import { IToolbar } from '@interfaces/toolbar.interface';
import {
  HeartIcon as HeartIconOutline,
  HomeIcon as HomeIconOutline
} from '@heroicons/react/24/outline';
import {
  HeartIcon as HeartIconSolid,
  HomeIcon as HomeIconSolid
} from '@heroicons/react/24/solid';
import { ICartIcon } from '@interfaces/cartIcon.interface';

const mockItemToolbar: IToolbar = {
  id: 1,
  path: '/',
  active: true,
  outline: <HomeIconOutline color='purple' />,
  solid: <HomeIconSolid color='purple' />
};

const mockIconCarts: ICartIcon = {
  id: 1,
  added: false,
  outline: <HeartIconOutline color='white' />,
  solid: <HeartIconSolid color='white' />
};

afterEach(() => {
  cleanup();
});

describe('IconItem', () => {
  test('Toolbar icon to be in the document', () => {
    render(<IconItem item={mockItemToolbar} />);
    expect(screen.getByTestId('icon-item-solid')).toBeInTheDocument();
    expect(screen.queryByTestId('icon-item-outline')).toBeNull();
  });

  test('CartIcon to be in the document', () => {
    render(<IconItem item={mockIconCarts} />);
    expect(screen.getByTestId('icon-item-outline')).toBeInTheDocument();
    expect(screen.queryByTestId('icon-item-solid')).toBeNull();
  });
});
