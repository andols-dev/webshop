import React, {useState} from 'react'
import { toast } from "react-toastify";
import products from './products'
const Context = React.createContext()


function ContextProvider({children}) {
    // const allProducts = products.map(product => product.id)
    const [allProducts, setAllProducts] = useState(products);
    const [cartItems, setCartItems] = useState([])

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

    function addToCart(newItemImg,newItemId,newItemFavorite) {
      setCartItems((prevItems) => [
        ...prevItems,
        newItemImg,
        newItemId,
        newItemFavorite,
      ]);
      toast.success("You've added item to cart!");
    }
    console.log(cartItems)
    return (
        <Context.Provider value={{allProducts , toggleFavourite,cartItems, addToCart}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}