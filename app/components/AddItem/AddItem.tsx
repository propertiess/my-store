import { FC } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { CounterProduct, RemoveButton } from '@/components';
import { fadeOutDown } from '@/animation';
import { IProduct } from '@/interfaces/product.interface';
import classes from './AddItem.module.scss';

type Props = {
  product: IProduct;
  type: 'basket' | 'favorite';
};

const AddItem: FC<Props> = ({ product, type }) => {
  const router = useRouter();

  return (
    <motion.li
      className={classes.item}
      data-testid='add-item'
      layout
      {...fadeOutDown}
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
    </motion.li>
  );
};

export { AddItem };
