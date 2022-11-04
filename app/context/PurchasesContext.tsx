import { FC, ReactNode, createContext, useEffect, useState } from 'react';
import { IProduct } from '@/interfaces/product.interface';

type Purchases = {
  products: IProduct[];
};

interface IPurchasesContext {
  favorite: Purchases;
  basket: Purchases;
  setBasket: (basket: Purchases) => void;
  setFavorite: (favorite: Purchases) => void;
}

export const PurchasesContext = createContext({} as IPurchasesContext);

interface Props {
  children: ReactNode;
}
interface IPurchases {
  favorite: Purchases;
  basket: Purchases;
}

export const PurchasesProvider: FC<Props> = ({ children }) => {
  const [purchases, setPurchases] = useState<IPurchases>({
    favorite: {
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

  const setFavorite = (favorite: Purchases) => {
    setPurchases({ ...purchases, favorite });
    localStorage.setItem(
      'purchases',
      JSON.stringify({
        ...purchases,
        favorite
      })
    );
  };

  return (
    <PurchasesContext.Provider
      value={{
        ...purchases,
        setBasket,
        setFavorite
      }}
    >
      {children}
    </PurchasesContext.Provider>
  );
};
