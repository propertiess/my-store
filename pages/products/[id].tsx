import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { CartList } from '@/components';
import { useArray } from '@/hooks';
import { IProduct } from '@/interfaces/product.interface';
import Layout from '@/layout/Layout';
import { ProductsService } from '@/services/products/products.service';
import classes from '@/styles/Product.module.scss';

type Props = {
  product: IProduct;
};

const Product: NextPage<Props> = ({ product }) => {
  const router = useRouter();
  const { arr } = useArray(Math.ceil(product.rating.rate));

  return (
    <Layout title={product.title} description={product.description}>
      <div className={classes.wrap}>
        <button className={classes.btn} onClick={() => router.back()}>
          Назад
        </button>
        <div className={classes.row}>
          <div className={classes.wrapImage}>
            <Image src={product.image} alt={product.title} layout='fill' />
          </div>
        </div>
        <h1>
          {product.title} <br /> {product.price} $
        </h1>
        <CartList product={product} />
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
  const product = await ProductsService.fetchProduct(Number(ctx.params!.id));

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
