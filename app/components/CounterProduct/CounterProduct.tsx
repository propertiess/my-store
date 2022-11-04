import { FC } from 'react';
import { motion } from 'framer-motion';
import { scaleOnHoverAndTap } from '@/animation';
import { usePurchases } from '@/hooks';
import classes from './CounterProduct.module.scss';

type Props = {
  id: number;
  amount: number;
};

const CounterProduct: FC<Props> = ({ amount, id }) => {
  const { setAmountBasketProduct } = usePurchases();

  return (
    <div className={classes.counter} data-testid='counter-product'>
      <motion.button
        onClick={() => setAmountBasketProduct(id, amount + 1)}
        {...scaleOnHoverAndTap}
      >
        +
      </motion.button>
      <p>{amount}</p>
      <motion.button
        onClick={() => setAmountBasketProduct(id, amount - 1)}
        {...scaleOnHoverAndTap}
      >
        -
      </motion.button>
    </div>
  );
};

export { CounterProduct };
