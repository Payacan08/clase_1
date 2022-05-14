import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import {CartContext} from './CartContext'
import {item as itemData} from "./Item";

const CartInfo = () => {

  const { cart , removeItem , clear} = useContext(CartContext)
  
    let total = 0
    cart.forEach(itemCart=>{
        total += itemCart.num * itemData.find(item=>item.id == itemCart.itemId).price
    })

  return (
    <div>
        <label className="btn btn-sm" onClick={clear}>Limpiar</label>
        {cart.map(item=>
            <div key={item.itemId}>
              <label className="btn btn-xs" onClick={()=>{removeItem(item.itemId)}}>X</label>
              Nombre: {itemData.find(itemData=>itemData.id == item.itemId).name} Cantidad: {item.num}
            </div>
          )}
        <span className="text-info">Subtotal: $ {total}</span>
        <Link to="/carro" className="btn btn-sm" >Comprar</Link>
    </div>
  )
}

export default CartInfo