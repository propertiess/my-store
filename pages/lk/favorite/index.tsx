import { NextPage } from 'next';
import { AddList } from '@/components';
import { usePurchases } from '@/hooks/usePurchases';
import Layout from '@/layout/Layout';

type Props = {};

const Favourite: NextPage<Props> = () => {
  const { favorite } = usePurchases();

  return (
    <Layout title={'Избранное'} description={'Избранное пользователя'}>
      <AddList
        title={'Избранное'}
        nothingTitle={'В избранном пока пусто'}
        products={favorite.products}
        type='favorite'
      />
    </Layout>
  );
};

export default Favourite;
