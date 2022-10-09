import { FC } from 'react';
import classes from './ProductItem.module.scss';
import { IProduct } from '../../types/product.interface';
import Image from 'next/image';
import { HeartIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useArray } from '../../hooks/useArray';

type Props = {
  product: IProduct;
};

const ProductItem: FC<Props> = ({ product }) => {
  const { arr } = useArray(Math.ceil(product.rating.rate));

  return (
    <div className={classes.wrap}>
      <div className={classes.wrapImage}>
        <Image
          src={product.image}
          alt={product.title}
          width={103}
          height={146}
        />
      </div>
      <div className={classes.addToCart}>
        <HeartIcon
          className={classes.icon}
          color='white'
          width={20}
          height={20}
        />
        <ShoppingCartIcon
          className={classes.icon}
          color='white'
          width={20}
          height={20}
        />
      </div>
      <div className={classes.wrapTitlePrice}>
        <h4 className={classes.title}>{product.title}</h4>
        <div className={classes.wrapPrice}>
          <p className={classes.price}>$ {product.price}</p>
          <div>
            {arr.map(el => (
              <Image
                key={el}
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
