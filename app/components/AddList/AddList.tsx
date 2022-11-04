import { FC } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AddItem } from '@/components';
import { fadeInUp } from '@/animation';
import { usePurchases } from '@/hooks';
import { IProduct } from '@/interfaces/product.interface';
import classes from './AddList.module.scss';

interface Props {
  title: string;
  nothingTitle: string;
  products: IProduct[];
  type: 'basket' | 'favorite';
}

const AddList: FC<Props> = ({ title, nothingTitle, products, type }) => {
  const { getFinalSum } = usePurchases();

  return (
    <div className={classes.wrap} data-testid='addList'>
      {!!products.length ? (
        <h5 className={classes.title}>{title}</h5>
      ) : (
        <h5 className={classes.title}>{nothingTitle}</h5>
      )}
      {!!getFinalSum && type === 'basket' && (
        <p className={classes.finalSum}>Итого: $ {getFinalSum}</p>
      )}
      <motion.ul
        className={classes.list}
        data-testid='list-addItem'
        layout
        {...fadeInUp}
      >
        <AnimatePresence mode='popLayout'>
          {products.map(prod => (
            <AddItem key={prod.id} product={prod} type={type} />
          ))}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
};

export { AddList };
