import { useState } from 'react';
import { ICartIcon } from '@/interfaces/cartIcon.interface';
import {
  HeartIcon as HeartIconOutline,
  ShoppingCartIcon as ShoppingCartIconOutline
} from '@heroicons/react/24/outline';
import {
  HeartIcon as HeartIconSolid,
  ShoppingCartIcon as ShoppingCartIconSolid
} from '@heroicons/react/24/solid';

const CART_COLOR = {
  color: 'white'
};

export const useCartIcon = () => {
  const [cartIcons, setCartIcons] = useState<ICartIcon[]>([
    {
      id: 1,
      added: false,
      outline: <HeartIconOutline {...CART_COLOR} />,
      solid: <HeartIconSolid {...CART_COLOR} />
    },
    {
      id: 2,
      added: false,
      outline: <ShoppingCartIconOutline {...CART_COLOR} />,
      solid: <ShoppingCartIconSolid {...CART_COLOR} />
    }
  ]);

  const setAdded = (id: number) => {
    setCartIcons(
      cartIcons.map(item => {
        if (item.id === id) {
          item.added = true;
        }
        return item;
      })
    );
  };

  return {
    cartIcons,
    setAdded
  };
};
