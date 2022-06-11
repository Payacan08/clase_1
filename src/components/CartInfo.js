import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import {CartContext} from './CartContext'

const CartInfo = () => {

  const { cart, totalCart } = useContext(CartContext)

  return (
    <div>
        {cart.map(item=>
            <div key={item.itemData.id}>
              Nombre: {item.itemData.name} Cantidad: {item.num}
            </div>
          )}
        <span className="text-info">Subtotal: $ {totalCart()}</span>
        <Link to="/carro" className="btn btn-sm" >Ir a carro</Link>
    </div>
  )
}

export default CartInfo