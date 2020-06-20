import React, { useState } from "react";
import { toast } from "react-toastify";
import products from "./products";
const Context = React.createContext();

function ContextProvider({ children }) {
  // const allProducts = products.map(product => product.id)
  const [allProducts, setAllProducts] = useState(products);
  const [cartItems, setCartItems] = useState([]);

  const toggleFavourite = (id) => {
    const updatedProdArr = allProducts.map((product) => {
      if (product.Id === id) {
        
        return {
          ...product,
          isFavorite: !product.isFavorite,
        };
      }
      return product;
    });
    setAllProducts(updatedProdArr);
  };

  function addToCart(newItem) {
    setCartItems((prevItems) => [...prevItems, newItem]);
    toast.success("You've added item to cart!");
    
  }

  function removeFromCart(id) {
    setCartItems((prevItems) => prevItems.filter((item) => item.Id !== id));
    console.log('remove');
  }

  function emptyCart() {
    setCartItems([]);
  }
  //console.log(cartItems);
  return (
    <Context.Provider
      value={{
        allProducts,
        toggleFavourite,
        cartItems,
        addToCart,
        removeFromCart,
        emptyCart,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
