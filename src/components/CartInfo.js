import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import {CartContext} from './CartContext'

const CartInfo = () => {

  const { cart } = useContext(CartContext)
    let total = 0
    cart.forEach(itemCart=>{
      total += itemCart.num * itemCart.itemData.price
    })

  return (
    <div>
        {cart.map(item=>
            <div key={item.itemData.id}>
              Nombre: {item.itemData.name} Cantidad: {item.num}
            </div>
          )}
        <span className="text-info">Subtotal: $ {total}</span>
        <Link to="/carro" className="btn btn-sm" >Ir a carro</Link>
    </div>
  )
}

export default CartInfo