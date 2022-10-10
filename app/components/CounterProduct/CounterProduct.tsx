import { FC } from 'react';
import { usePurchases } from '../../hooks/usePurchases';
import classes from './CounterProduct.module.scss';

type Props = {
  id: number;
  amount: number;
};

const CounterProduct: FC<Props> = ({ amount, id }) => {
  const { setAmountBasketProduct } = usePurchases();

  return (
    <div className={classes.counter}>
      <button onClick={() => setAmountBasketProduct(id, amount + 1)}>+</button>
      <p>{amount}</p>
      <button onClick={() => setAmountBasketProduct(id, amount - 1)}>-</button>
    </div>
  );
};

export default CounterProduct;
