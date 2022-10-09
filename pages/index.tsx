import type { GetStaticProps, NextPage } from 'next';
import Layout from '../app/layout/Layout';
import Products from '../app/components/Products/Products';
import { fakeStoreAPI } from '../app/api/fakeStore/fakeStoreAPI';
import { IProduct } from '../app/types/product.interface';

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
  const products = await fakeStoreAPI.fetchProducts();
  return {
    props: {
      products
    }
  };
};

export default Home;
