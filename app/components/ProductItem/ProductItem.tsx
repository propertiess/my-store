import React, { FC, HTMLAttributes } from 'react';
import classes from './ProductItem.module.scss';
import { IProduct } from '@/interfaces/product.interface';
import Image from 'next/image';
import { useArray } from '@/hooks/useArray';
import { useRouter } from 'next/router';
import StarList from '@/components/StarList/StarList';
import CartList from '@/components/CartList/CartList';

interface Props extends HTMLAttributes<HTMLDivElement> {
  product: IProduct;
}

const ProductItem: FC<Props> = ({ product }) => {
  const router = useRouter();
  const { arr } = useArray(Math.ceil(product.rating.rate));

  return (
    <div className={classes.wrap} data-testid='product-item'>
      <div className={classes.container}>
        <div className={classes.wrapImage}>
          <Image src={product.image} alt={product.title} layout='fill' />
        </div>
      </div>
      <CartList product={product} />
      <div className={classes.wrapTitlePrice}>
        <h4
          className={classes.title}
          onClick={() => router.push(`/products/${product.id}`)}
        >
          {product.title}
        </h4>
        <div className={classes.wrapPrice}>
          <p className={classes.price}>$ {product.price}</p>
          <StarList quantity={arr} />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
