import { FC } from 'react';
import { IProduct } from '@/interfaces/product.interface';
import AddItem from '@/components/AddItem/AddItem';
import classes from './AddList.module.scss';
import { usePurchases } from '@/hooks/usePurchases';
import CustomMotion from '@/components/CustomMotion/CustomMotion';
import { fadeInUp } from '@/animations';
import { AnimatePresence } from 'framer-motion';

interface Props {
  title: string;
  nothingTitle: string;
  products: IProduct[];
  type: 'basket' | 'favourite';
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
      <CustomMotion
        element={'ul'}
        variants={fadeInUp}
        layout
        className={classes.list}
        data-testid='list-addItem'
      >
        <AnimatePresence mode='popLayout'>
          {products.map(prod => (
            <AddItem key={prod.id} product={prod} type={type} />
          ))}
        </AnimatePresence>
      </CustomMotion>
    </div>
  );
};

export default AddList;
