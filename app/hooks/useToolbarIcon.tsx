import { IToolbar } from '@interfaces/toolbar.interface';
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
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const TOOLBAR_COLOR = {
  color: 'purple'
};

export const useToolbarIcon = () => {
  const [toolBars, setToolBars] = useState<IToolbar[]>([
    {
      id: 1,
      path: '/',
      active: true,
      outline: <HomeIconOutline {...TOOLBAR_COLOR} />,
      solid: <HomeIconSolid {...TOOLBAR_COLOR} />
    },
    {
      id: 2,
      path: '/lk/basket',
      active: false,
      outline: <ShoppingCartIconOutline {...TOOLBAR_COLOR} />,
      solid: <ShoppingCartIconSolid {...TOOLBAR_COLOR} />
    },
    {
      id: 3,
      path: '/lk/favourite',
      active: false,
      outline: <HeartIconOutline {...TOOLBAR_COLOR} />,
      solid: <HeartIconSolid {...TOOLBAR_COLOR} />
    },
    {
      id: 4,
      path: '/lk/profile',
      active: false,
      outline: <UserIconOutline {...TOOLBAR_COLOR} />,
      solid: <UserIconSolid {...TOOLBAR_COLOR} />
    }
  ]);

  const router = useRouter();

  useEffect(() => {
    if (router) setActiveItem(router.asPath);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setActiveItem = (pathName: string) => {
    router.push(pathName).then(() => {
      setToolBars(prev => {
        return prev.map(el => {
          el.active = el.path === pathName;
          return el;
        });
      });
    });
  };

  return {
    toolBars,
    setActiveItem
  };
};
