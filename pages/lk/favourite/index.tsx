import { NextPage } from 'next';
import AddList from '../../../app/components/AddList/AddList';
import { usePurchases } from '../../../app/hooks/usePurchases';
import Layout from '../../../app/layout/Layout';

type Props = {};

const Favourite: NextPage<Props> = () => {
  const { favourite } = usePurchases();

  return (
    <Layout title={'Избранное'} description={'Избранное пользователя'}>
      <AddList
        title={'Избранное'}
        nothingTitle={'В избранном пока пусто'}
        products={favourite.products}
        type='favourite'
      />
    </Layout>
  );
};

export default Favourite;
