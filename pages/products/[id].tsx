import { GetServerSideProps, NextPage } from 'next';
import { fakeStoreService } from '@services/fakeStore/fakeStoreService';
import { IProduct } from '@interfaces/product.interface';
import Layout from '@layout/Layout';
import Image from 'next/image';
import classes from '@styles/Product.module.scss';
import { useRouter } from 'next/router';
import { useArray } from '@hooks/useArray';

type Props = {
  product: IProduct;
};

const Product: NextPage<Props> = ({ product }) => {
  const router = useRouter();
  const { arr } = useArray(Math.ceil(product.rating.rate));
  return (
    <Layout title={product.title} description={product.description}>
      <div className={classes.wrap}>
        <button onClick={() => router.back()}>Назад</button>
        <div className={classes.row}>
          <div className={classes.wrapImage}>
            <Image src={product.image} alt={product.title} layout='fill' />
          </div>
        </div>
        <h1>
          {product.title} <br /> {product.price} $
        </h1>
        <div>
          {arr.map(el => (
            <Image
              key={el}
              alt={'star' + el}
              width={24}
              height={24}
              src='/star.svg'
            />
          ))}
          <p>Reviews: {product.rating.count}</p>
        </div>
        <div>
          <h5>About product :</h5>
          <p>{product.description}</p>
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ctx => {
  const product = await fakeStoreService.fetchProduct(Number(ctx.params!.id));

  if (!product) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      product
    }
  };
};

export default Product;
