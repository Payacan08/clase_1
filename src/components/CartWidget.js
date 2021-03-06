import React, { useContext } from 'react'
import { CartContext } from './CartContext'
import CartInfo from './CartInfo'

const CartWidget = () => {
const {cart} = useContext(CartContext)

  let count = 0
  cart.forEach(itemCart=>{count+=itemCart.num})

  return (
    <div className="dropdown dropdown-end">
      <div className='indicator'>
        <span className="indicator-item indicator-start badge badge-secondary">{count}</span> 
        <label tabIndex="0" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap='round' strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
        </div>
        </label>
        <div tabIndex="0" className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
          <div className="card-body">
            {cart.length === 0 ? <span className="font-bold text-lg">Vacio</span> :<CartInfo/>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartWidget