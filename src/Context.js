import React, {useState} from 'react'

const Context = React.createContext()

function ContextProvider({children}) {
    const [products, setProducts] = useState([])
    return (
        <Context.Provider value={{products}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}