import { useContext, useMemo } from 'react';
import { PurchasesContext } from '@context/PurchasesContext';
import { IProduct } from '@interfaces/product.interface';

export const usePurchases = () => {
  const { setBasket, setFavourite, basket, favourite } =
    useContext(PurchasesContext);

  const addToBasket = (product: IProduct) => {
    setBasket({
      ...basket,
      products: [...basket.products, product]
    });
  };

  const addToFavourite = (product: IProduct) => {
    setFavourite({
      ...favourite,
      products: [...favourite.products, product]
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

  const removeFromFavourite = (id: number) => {
    setFavourite({
      ...favourite,
      products: favourite.products.filter(el => el.id !== id)
    });
  };

  const getFinalSum = useMemo(() => {
    if (basket) {
      return basket.products
        .reduce((acc, el) => (acc += el.amount! * el.price), 0)
        .toFixed(2);
    }
    return 0;
  }, [basket]);

  return {
    addToBasket,
    addToFavourite,
    removeFromBasket,
    removeFromFavourite,
    setAmountBasketProduct,
    favourite,
    basket,
    getFinalSum
  };
};
