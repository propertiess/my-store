import { useContext, useMemo } from 'react';
import { PurchasesContext } from '@/context/PurchasesContext';
import { IProduct } from '@/interfaces/product.interface';

export const usePurchases = () => {
  const { setBasket, setFavorite, basket, favorite } =
    useContext(PurchasesContext);

  const addToBasket = (product: IProduct) => {
    setBasket({
      ...basket,
      products: [...basket.products, product]
    });
  };

  const addToFavorite = (product: IProduct) => {
    setFavorite({
      ...favorite,
      products: [...favorite.products, product]
    });
  };

  const removeFromBasket = (id: number) => {
    setBasket({
      ...basket,
      products: basket.products.filter(el => el.id !== id)
    });
  };

  const setAmountBasketProduct = (id: number, amount: number) => {
    if (!amount) {
      removeFromBasket(id);
      return;
    }
    setBasket({
      ...basket,
      products: basket.products.map(el => {
        if (el.id === id) {
          el.amount = amount;
        }
        return el;
      })
    });
  };

  const removeFromFavorite = (id: number) => {
    setFavorite({
      ...favorite,
      products: favorite.products.filter(el => el.id !== id)
    });
  };

  const getFinalSum = useMemo(() => {
    if (basket) {
      return parseFloat(
        basket.products
          .reduce((acc, el) => (acc += el.amount! * el.price), 0)
          .toFixed(2)
      );
    }
    return 0;
  }, [basket]);

  const getQuantityBasketProducts = useMemo(() => {
    if (basket)
      return basket.products.reduce((acc, el) => (acc += el.amount!), 0);
    return 0;
  }, [basket]);

  return {
    addToBasket,
    addToFavorite,
    removeFromBasket,
    removeFromFavorite,
    setAmountBasketProduct,
    favorite,
    basket,
    getFinalSum,
    getQuantityBasketProducts
  };
};
