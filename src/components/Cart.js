import React, { useContext } from 'react'
import {CartContext} from './CartContext'

const Cart = () => {
  const { cart , removeItem , clear,} = useContext(CartContext)
  
    let total = 0
    cart.forEach(itemCart=>{
        total += itemCart.num * itemCart.itemData.price
    })

  return (
    <div className='flex justify-center'>
      <div className='card w-2/3 md:card-side bg-base-100 shadow-xl'>
        <div className='card-body'>
          <h2 className='card-tittle self-center text-3xl'>Carro</h2>
          <table className='table-auto'>
            <thead>
              <tr>
                <th></th>
                <th>Nombre</th>
                <th>Cantidad</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(item=>
                <tr key={item.itemData.id}>
                  <th><label className="btn btn-xs" onClick={()=>{removeItem(item.itemData.id)}}>X</label></th>
                  <th>{item.itemData.name}</th>
                  <th>{item.num}</th>
                  <th>{item.itemData.price}</th>                
                </tr>
              )}
            </tbody>
            <tfoot>
              <tr>
                <th></th>
                <th></th>
                <th></th>
                <th>Subtotal: $ {total}</th>
              </tr>
            </tfoot>
          </table> 
          <label className="btn btn-sm" onClick={clear}>Limpiar</label>
          <label className="btn btn-sm" >Comprar</label>      
        </div>
      </div> 
    </div>
  )

}

export default Cart