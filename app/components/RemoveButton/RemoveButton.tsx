import { XMarkIcon } from '@heroicons/react/24/solid';
import { FC } from 'react';
import { usePurchases } from '@/hooks/usePurchases';
import classes from './RemoveButton.module.scss';

type Props = {
  id: number;
  type: 'basket' | 'favorite';
};

const RemoveButton: FC<Props> = ({ id, type }) => {
  const { removeFromBasket, removeFromFavorite } = usePurchases();

  if (type === 'favorite') {
    return (
      <button
        className={classes.btn}
        data-testid='remove-btn'
        onClick={() => removeFromFavorite(id)}
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

export { RemoveButton };
