import { FC } from 'react';
import { IProduct } from '@interfaces/product.interface';
import classes from './AddItem.module.scss';
import Image from 'next/image';
import CounterProduct from '@components/CounterProduct/CounterProduct';
import RemoveButton from '@components/RemoveButton/RemoveButton';
import { useRouter } from 'next/router';
import CustomMotion from '@components/CustomMotion/CustomMotion';
import { fadeOutDown } from '@animations';

type Props = {
  product: IProduct;
  type: 'basket' | 'favourite';
};

const AddItem: FC<Props> = ({ product, type }) => {
  const router = useRouter();
  return (
    <CustomMotion
      element='li'
      variants={fadeOutDown}
      // @ts-ignore
      layout
      className={classes.item}
      data-testid='add-item'
    >
      <span className={classes.wrapImage}>
        <Image src={product.image} alt={product.title} layout='fill' />
      </span>
      <div>
        <p className={classes.price}>$ {product.price}</p>
        <h6
          className={classes.title}
          onClick={() => router.push(`/products/${product.id}`)}
        >
          {product.title}
        </h6>
        {type === 'basket' && (
          <CounterProduct id={product.id} amount={product.amount!} />
        )}
      </div>
      <RemoveButton id={product.id} type={type} />
    </CustomMotion>
  );
};

export default AddItem;
