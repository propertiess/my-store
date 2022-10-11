import { FC } from 'react';
import classes from './Products.module.scss';
import ProductItem from '@components/ProductItem/ProductItem';
import { IProduct } from '@interfaces/product.interface';

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
