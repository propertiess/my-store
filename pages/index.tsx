import type { GetStaticProps, NextPage } from 'next';
import Layout from '@layout/Layout';
import Products from '@components/Products/Products';
import { StoreService } from '@services/Store/storeService';
import { IProduct } from '@interfaces/product.interface';
import Search from '@components/Search/Search';
import { useSearch } from '@hooks/useSearch';

interface Props {
  products: IProduct[];
}

const Home: NextPage<Props> = ({ products }) => {
  const { searchProducts, searchQuery } = useSearch(products);
  return (
    <Layout title='Главная' description='Приложение'>
      <>
        <Search searchQuery={searchQuery} />
        <Products products={searchProducts} />
      </>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const products = await StoreService.fetchProducts();
  return {
    props: {
      products
    }
  };
};

export default Home;
