import { FC } from 'react';
import classes from './Products.module.scss';
import ProductItem from '../ProductItem/ProductItem';
import { IProduct } from '../../types/product.interface';

type Props = {
  products: IProduct[];
};

const Products: FC<Props> = ({ products }) => {
  return (
    <div className={classes.wrapper}>
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
