import { FC } from 'react';
import { IProduct } from '../../types/product.interface';
import classes from './AddItem.module.scss';
import Image from 'next/image';
import CounterProduct from '../CounterProduct/CounterProduct';

type Props = {
  product: IProduct;
  type: 'basket' | 'favourite';
};

const AddItem: FC<Props> = ({ product, type }) => {
  return (
    <li className={classes.item}>
      <Image src={product.image} width={100} height={100} alt={product.title} />
      <div>
        <p className={classes.price}>$ {product.price}</p>
        <h6>{product.title}</h6>
        {type === 'basket' && (
          <CounterProduct id={product.id} amount={product.amount!} />
        )}
      </div>
    </li>
  );
};

export default AddItem;
