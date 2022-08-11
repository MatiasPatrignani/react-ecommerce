import React, { createContext, useEffect, useState } from 'react'
export const ShoppingContext = createContext();
const ShoppingProvider = ({children}) => {
  // State from Cart Modal
  const [myCartContext, setItemsContext] = useState(
    JSON.parse(localStorage.getItem("myCart")) || []
  );
  const [login, setLogin] = useState(
    
  )

  return (
    <ShoppingContext.Provider value={{myCartContext , setItemsContext}}>
    {children}
    </ShoppingContext.Provider>
  )
}

export default ShoppingProvider