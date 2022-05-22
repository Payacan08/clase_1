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
  
    const addItem = (itemData)=>{
        if (isInCart(itemData.id) === undefined){
            setCart(currentCart => {
                return currentCart.concat({itemData,num:1})
                })
        }else{
            setCart(currentCart => {
                return currentCart.map(item =>
                    {return item.itemData.id === itemData.id ? {itemData,num:item.num + 1}: item})
                })
        }
    }

    const removeItem = (itemId)=>{
        setCart(currentCart => {
            return currentCart.filter(item=>item.itemData.id !== itemId)
        })
    }

    const clear = ()=>{setCart([])}

    const isInCart = (itemId)=>{
        return cart.find((item)=>item.itemData.id === itemId)
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