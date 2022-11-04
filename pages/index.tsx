import type { GetStaticProps, NextPage } from 'next';
import { Products, Search } from '@/components';
import { useSearch } from '@/hooks';
import { IProduct } from '@/interfaces/product.interface';
import Layout from '@/layout/Layout';
import { ProductsService } from '@/services/products/products.service';

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
  const products = await ProductsService.fetchProducts();

  return {
    props: {
      products
    }
  };
};

export default Home;
