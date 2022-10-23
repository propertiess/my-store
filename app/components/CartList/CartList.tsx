import { FC, HTMLAttributes, useEffect } from 'react';
import IconItem from '@/components/IconItem/IconItem';
import { usePurchases } from '@/hooks/usePurchases';
import { useCartIcon } from '@/hooks/useCartIcon';
import { IProduct } from '@/interfaces/product.interface';
import classes from './CartList.module.scss';

interface Props extends HTMLAttributes<unknown> {
  product: IProduct;
}

const CartList: FC<Props> = ({ product, ...other }) => {
  const { basket, favourite, addToFavourite, addToBasket } = usePurchases();
  const { cartIcons, setAdded } = useCartIcon();

  const handler = (id: number, added: boolean) => {
    if (added) return;
    setAdded(id);
    if (id === 1) {
      addToFavourite({ ...product, amount: 1 });
    } else if (id === 2) {
      addToBasket({ ...product, amount: 1 });
    }
  };

  useEffect(() => {
    if (!basket) return;
    if (Array.isArray(basket.products)) {
      basket.products.forEach(el => {
        if (el.id === product.id) {
          setAdded(2);
        }
      });
    }

    if (!favourite) return;
    if (Array.isArray(favourite.products)) {
      favourite.products?.forEach(el => {
        if (el.id === product.id) {
          setAdded(1);
        }
      });
    }
  }, [basket, favourite]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={classes.addToCart} {...other}>
      <ul className={classes.list}>
        {cartIcons.map(item => (
          <IconItem
            key={item.id}
            item={item}
            data-testid={'icons'}
            onClick={() => handler(item.id, item.added)}
          />
        ))}
      </ul>
    </div>
  );
};

export default CartList;
