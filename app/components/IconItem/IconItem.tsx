import { FC, HTMLAttributes } from 'react';
import { useRouter } from 'next/router';
import { Sticker } from '@/components';
import { usePurchases } from '@/hooks/usePurchases';
import { ICartIcon } from '@/interfaces/cartIcon.interface';
import { IToolbar } from '@/interfaces/toolbar.interface';
import classes from './IconItem.module.scss';

interface Props extends HTMLAttributes<HTMLLIElement> {
  item: IToolbar | ICartIcon;
}

const IconItem: FC<Props> = ({ item, ...other }) => {
  const { getQuantityBasketProducts, favorite } = usePurchases();
  const router = useRouter();
  const condition = (item as IToolbar)?.path === router?.asPath;
  const conditionLogin =
    (item as IToolbar)?.path === '/lk/profile' &&
    router?.asPath === '/lk/profile/login';

  return (
    <>
      {condition || conditionLogin || (item as ICartIcon)?.added ? (
        <li className={classes.icon} data-testid='icon-item-solid' {...other}>
          {item.solid}
          {(item as IToolbar).path === '/lk/basket' && (
            <Sticker value={getQuantityBasketProducts} />
          )}
          {(item as IToolbar).path === '/lk/favorite' && (
            <Sticker value={favorite?.products.length} />
          )}
        </li>
      ) : (
        <li className={classes.icon} data-testid='icon-item-outline' {...other}>
          {item.outline}
          {(item as IToolbar).path === '/lk/basket' && (
            <Sticker value={getQuantityBasketProducts} />
          )}
          {(item as IToolbar).path === '/lk/favorite' && (
            <Sticker value={favorite?.products.length} />
          )}
        </li>
      )}
    </>
  );
};

export { IconItem };
