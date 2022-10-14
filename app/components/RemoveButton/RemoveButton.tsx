import { FC } from 'react';
import { usePurchases } from '@hooks/usePurchases';
import classes from './RemoveButton.module.scss';
import { XMarkIcon } from '@heroicons/react/24/solid';

type Props = {
  id: number;
  type: 'basket' | 'favourite';
};

const RemoveButton: FC<Props> = ({ id, type }) => {
  const { removeFromBasket, removeFromFavourite } = usePurchases();

  if (type === 'favourite') {
    return (
      <button
        className={classes.btn}
        data-testid='remove-btn'
        onClick={() => removeFromFavourite(id)}
      >
        <XMarkIcon width={24} height={24} />
      </button>
    );
  }

  return (
    <button
      className={classes.btn}
      data-testid='remove-btn'
      onClick={() => removeFromBasket(id)}
    >
      <XMarkIcon width={24} height={24} />
    </button>
  );
};

export default RemoveButton;
