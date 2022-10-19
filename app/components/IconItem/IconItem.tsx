import { FC, HTMLAttributes, useContext } from 'react';
import { IToolbar } from '@interfaces/toolbar.interface';
import classes from './IconItem.module.scss';
import { ICartIcon } from '@interfaces/cartIcon.interface';
import Sticker from '@components/Sticker/Sticker';
import { usePurchases } from '@hooks/usePurchases';
import { ActivePathContext } from '@context/ActivePathContext';

interface Props extends HTMLAttributes<HTMLLIElement> {
  item: IToolbar | ICartIcon;
}

const IconItem: FC<Props> = ({ item, ...other }) => {
  const { getQuantityBasketProducts, favourite } = usePurchases();
  const { path } = useContext(ActivePathContext);
  return (
    <>
      {(item as IToolbar)?.path === path || (item as ICartIcon)?.added ? (
        <li className={classes.icon} data-testid='icon-item-solid' {...other}>
          {item.solid}
          {(item as IToolbar).path === '/lk/basket' && (
            <Sticker value={getQuantityBasketProducts} />
          )}
          {(item as IToolbar).path === '/lk/favourite' && (
            <Sticker value={favourite?.products.length} />
          )}
        </li>
      ) : (
        <li className={classes.icon} data-testid='icon-item-outline' {...other}>
          {item.outline}
          {(item as IToolbar).path === '/lk/basket' && (
            <Sticker value={getQuantityBasketProducts} />
          )}
          {(item as IToolbar).path === '/lk/favourite' && (
            <Sticker value={favourite?.products.length} />
          )}
        </li>
      )}
    </>
  );
};

export default IconItem;
