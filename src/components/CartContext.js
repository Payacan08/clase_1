import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: [],
    addItem: (item,quantity) => {},
    removeItem: (itemId) => {},
    clear: ()=>{},
    isInCart: (id)=>{}
});

const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([])
  
    const addItem = (itemId)=>{
        if (isInCart(itemId) === undefined){
            setCart(currentCart => {
                return currentCart.concat({itemId,num:1})
                })
        }else{
            setCart(currentCart => {
                return currentCart.map(item =>
                    {return item.itemId === itemId ? {itemId,num:item.num + 1}: item})
                })
        }
    }

    const removeItem = (itemId)=>{
        setCart(currentCart => {
            return currentCart.filter(item=>item.itemId !== itemId)
        })
    }

    const clear = ()=>{setCart([])}

    const isInCart = (itemId)=>{
        return cart.find((item)=>item.itemId === itemId)
    }

    const context = {
        cart,
        addItem,
        removeItem,
        clear
    };
    
  return (
    <CartContext.Provider value={ context }>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider