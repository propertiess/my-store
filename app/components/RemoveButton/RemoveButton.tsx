import { FC } from 'react';
import { usePurchases } from '../../hooks/usePurchases';
import classes from './RemoveButton.module.scss';

type Props = {
  id: number;
  type: 'basket' | 'favourite';
};

const RemoveButton: FC<Props> = ({ id, type }) => {
  const { removeFromBasket, removeFromFavourite } = usePurchases();

  if (type === 'favourite') {
    return (
      <button className={classes.btn} onClick={() => removeFromFavourite(id)}>
        Удалить
      </button>
    );
  }

  return (
    <button className={classes.btn} onClick={() => removeFromBasket(id)}>
      Удалить
    </button>
  );
};

export default RemoveButton;
