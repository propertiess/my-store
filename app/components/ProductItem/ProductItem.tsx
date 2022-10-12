import React, { FC, useEffect } from 'react';
import classes from './ProductItem.module.scss';
import { IProduct } from '@interfaces/product.interface';
import Image from 'next/image';
import { useArray } from '@hooks/useArray';
import IconItem from '@components/IconItem/IconItem';
import { useCartIcon } from '@hooks/useCartIcon';
import { usePurchases } from '@hooks/usePurchases';

type Props = {
  product: IProduct;
};

const ProductItem: FC<Props> = ({ product }) => {
  const { arr } = useArray(Math.ceil(product.rating.rate));
  const { addToBasket, addToFavourite } = usePurchases();
  const { cartIcons, setAdded } = useCartIcon();

  const { basket, favourite } = usePurchases();

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
  }, [basket, favourite]);

  return (
    <div className={classes.wrap} data-testid='product-item'>
      <div className={classes.container}>
        <div className={classes.wrapImage}>
          <Image src={product.image} alt={product.title} layout='fill' />
        </div>
      </div>
      <div className={classes.addToCart}>
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
      <div className={classes.wrapTitlePrice}>
        <h4 className={classes.title}>{product.title}</h4>
        <div className={classes.wrapPrice}>
          <p className={classes.price}>$ {product.price}</p>
          <div>
            {arr.map(el => (
              <Image
                key={el}
                data-testid='stars'
                src='/star.svg'
                height={13}
                width={13}
                alt={product.rating.rate.toString()}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
