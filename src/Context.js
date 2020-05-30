import React, {useState} from 'react'
import products from './products'
const Context = React.createContext()

function ContextProvider({children}) {
    // const allProducts = products.map(product => product.id)
    const [allProducts, setAllProducts] = useState(products);

    const toggleFavourite = (id) => {
      const updatedProdArr = allProducts.map((product) => {
        if (product.Id === id) {
          console.log(id);
          console.log(!product.isFavorite);
          return {
            ...product,
            isFavorite: !product.isFavorite,
          };
          
        }
        return product;
      });
     setAllProducts(updatedProdArr)
    };

    return (
        <Context.Provider value={{allProducts , toggleFavourite}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}