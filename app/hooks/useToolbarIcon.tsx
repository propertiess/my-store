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
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
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

  const router = useRouter();

  useEffect(() => {
    if (router) setActiveItem(router.asPath);
  }, []); // eslint-disable-line

  const setActiveItem = (pathName: string) => {
    let ignore = router.push(pathName);
  };

  return {
    toolBars: toolBars.current,
    setActiveItem
  };
};
