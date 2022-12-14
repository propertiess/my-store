import {
  HeartIcon as HeartIconOutline,
  HomeIcon as HomeIconOutline,
  ShoppingBagIcon as ShoppingCartIconOutline,
  UserIcon as UserIconOutline
} from '@heroicons/react/24/outline';
import {
  HeartIcon as HeartIconSolid,
  HomeIcon as HomeIconSolid,
  ShoppingBagIcon as ShoppingCartIconSolid,
  UserIcon as UserIconSolid
} from '@heroicons/react/24/solid';
import { useRef } from 'react';
import { IToolbar } from '@/interfaces/toolbar.interface';

const TOOLBAR_COLOR = {
  color: 'purple'
};

export const useToolbarIcon = () => {
  const toolBars = useRef<IToolbar[]>([
    {
      id: 1,
      path: '/',
      outline: <HomeIconOutline {...TOOLBAR_COLOR} />,
      solid: <HomeIconSolid {...TOOLBAR_COLOR} />
    },
    {
      id: 2,
      path: '/lk/basket',
      outline: <ShoppingCartIconOutline {...TOOLBAR_COLOR} />,
      solid: <ShoppingCartIconSolid {...TOOLBAR_COLOR} />
    },
    {
      id: 3,
      path: '/lk/favorite',
      outline: <HeartIconOutline {...TOOLBAR_COLOR} />,
      solid: <HeartIconSolid {...TOOLBAR_COLOR} />
    },
    {
      id: 4,
      path: '/lk/profile',
      outline: <UserIconOutline {...TOOLBAR_COLOR} />,
      solid: <UserIconSolid {...TOOLBAR_COLOR} />
    }
  ]);

  return {
    toolBars: toolBars.current
  };
};
