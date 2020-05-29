import React from 'react'
import products from './products'
const Context = React.createContext()

function ContextProvider({children}) {
    // const allProducts = products.map(product => product.id)
    return (
        <Context.Provider value={products}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}