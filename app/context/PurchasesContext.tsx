import { IProduct } from '../types/product.interface';
import { createContext, FC, ReactNode, useEffect, useState } from 'react';

type Purchases = {
  products: IProduct[];
};

interface IPurchasesContext {
  favourite: Purchases;
  basket: Purchases;
  setBasket: (basket: Purchases) => void;
  setFavourite: (favourite: Purchases) => void;
}

export const PurchasesContext = createContext({} as IPurchasesContext);

interface Props {
  children: ReactNode;
}
interface IPurchases {
  favourite: Purchases;
  basket: Purchases;
}

export const PurchasesProvider: FC<Props> = ({ children }) => {
  const [purchases, setPurchases] = useState<IPurchases>({
    favourite: {
      products: []
    },
    basket: {
      products: []
    }
  });

  useEffect(() => {
    const item = localStorage.getItem('purchases');
    if (item) {
      const purchases = JSON.parse(item);
      setPurchases(purchases);
    }
  }, []);

  const setBasket = (basket: Purchases) => {
    setPurchases({ ...purchases, basket });
    localStorage.setItem(
      'purchases',
      JSON.stringify({
        ...purchases,
        basket
      })
    );
  };

  const setFavourite = (favourite: Purchases) => {
    setPurchases({ ...purchases, favourite });
    localStorage.setItem(
      'purchases',
      JSON.stringify({
        ...purchases,
        favourite
      })
    );
  };

  return (
    <PurchasesContext.Provider
      value={{
        basket: purchases.basket,
        favourite: purchases.favourite,
        setBasket,
        setFavourite
      }}
    >
      {children}
    </PurchasesContext.Provider>
  );
};
