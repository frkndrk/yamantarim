import React, { createContext } from "react";
import { categories, products } from "../data";

export const ShopContext = createContext(null)

const ShopContextProvider = (props) => {
    const contextValue = {categories, products}

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;