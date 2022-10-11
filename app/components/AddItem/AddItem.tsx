import { FC } from 'react';
import { IProduct } from '@interfaces/product.interface';
import classes from './AddItem.module.scss';
import Image from 'next/image';
import CounterProduct from '@components/CounterProduct/CounterProduct';
import RemoveButton from '@components/RemoveButton/RemoveButton';

type Props = {
  product: IProduct;
  type: 'basket' | 'favourite';
};

const AddItem: FC<Props> = ({ product, type }) => {
  return (
    <li className={classes.item}>
      <span className={classes.wrapImage}>
        <Image src={product.image} alt={product.title} layout='fill' />
      </span>
      <div>
        <p className={classes.price}>$ {product.price}</p>
        <h6>{product.title}</h6>
        {type === 'basket' && (
          <CounterProduct id={product.id} amount={product.amount!} />
        )}
      </div>
      <RemoveButton id={product.id} type={type} />
    </li>
  );
};

export default AddItem;
