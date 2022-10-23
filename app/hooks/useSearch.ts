import { IProduct } from '@/interfaces/product.interface';
import { useMemo, useState } from 'react';
import { useDebounce } from 'use-debounce';

export const useSearch = (products: IProduct[]) => {
  const [search, setSearch] = useState('');
  const [value] = useDebounce(search, 500);

  const searchProducts = useMemo(() => {
    return [...products].filter(product =>
      product.title.toLowerCase().includes(value.toLowerCase())
    );
  }, [value, products]);

  const searchQuery = (val: string) => {
    setSearch(val);
  };

  return {
    searchProducts,
    searchQuery
  };
};
