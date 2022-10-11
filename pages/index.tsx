import type { GetStaticProps, NextPage } from 'next';
import Layout from '@layout/Layout';
import Products from '@components/Products/Products';
import { fakeStoreService } from '@services/fakeStore/fakeStoreService';
import { IProduct } from '@interfaces/product.interface';

interface Props {
  products: IProduct[];
}

const Home: NextPage<Props> = ({ products }) => {
  return (
    <Layout title='Главная' description='Приложение'>
      <>
        <Products products={products} />
      </>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const products = await fakeStoreService.fetchProducts();
  return {
    props: {
      products
    }
  };
};

export default Home;
