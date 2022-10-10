import { NextPage } from 'next';
import AddList from '../../../app/components/AddList/AddList';
import { usePurchases } from '../../../app/hooks/usePurchases';
import Layout from '../../../app/layout/Layout';

type Props = {};

const Basket: NextPage<Props> = () => {
  const { basket } = usePurchases();

  return (
    <Layout title={'Корзина'} description={'Корзина товаров пользователя'}>
      <AddList
        title={'Корзина'}
        nothingTitle={'В корзине пока пусто'}
        products={basket.products}
        type='basket'
      />
    </Layout>
  );
};

export default Basket;
