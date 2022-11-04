import { FC } from 'react';
import { ProductItem } from '@/components';
import { IProduct } from '@/interfaces/product.interface';
import classes from './Products.module.scss';

type Props = {
  products: IProduct[];
};

const Products: FC<Props> = ({ products }) => {
  return (
    <div className={classes.wrapper} data-testid='products-list'>
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export { Products };
