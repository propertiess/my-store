import { FC } from 'react';
import { usePurchases } from '@/hooks/usePurchases';
import classes from './CounterProduct.module.scss';
import CustomMotion from '@/components/CustomMotion/CustomMotion';
import { scaleOnHoverAndTap } from '@/animations';

type Props = {
  id: number;
  amount: number;
};

const CounterProduct: FC<Props> = ({ amount, id }) => {
  const { setAmountBasketProduct } = usePurchases();

  return (
    <div className={classes.counter} data-testid='counter-product'>
      <CustomMotion
        element='button'
        variants={scaleOnHoverAndTap}
        onClick={() => setAmountBasketProduct(id, amount + 1)}
      >
        +
      </CustomMotion>
      <p>{amount}</p>
      <CustomMotion
        element='button'
        variants={scaleOnHoverAndTap}
        onClick={() => setAmountBasketProduct(id, amount - 1)}
      >
        -
      </CustomMotion>
    </div>
  );
};

export default CounterProduct;
