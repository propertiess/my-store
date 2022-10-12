import { FC } from 'react';
import { IProduct } from '@interfaces/product.interface';
import AddItem from '@components/AddItem/AddItem';
import classes from './AddList.module.scss';

interface Props {
  title: string;
  nothingTitle: string;
  products: IProduct[];
  type: 'basket' | 'favourite';
}

const AddList: FC<Props> = ({ title, nothingTitle, products, type }) => {
  return (
    <div className={classes.wrap} data-testid='addList'>
      {!!products.length ? (
        <h5 className={classes.title}>{title}</h5>
      ) : (
        <h5 className={classes.title}>{nothingTitle}</h5>
      )}
      <ul className={classes.list} data-testid='list-addItem'>
        {products.map(prod => (
          <AddItem key={prod.id} product={prod} type={type} />
        ))}
      </ul>
    </div>
  );
};

export default AddList;
