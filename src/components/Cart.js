import React, { useContext } from 'react'
import {CartContext} from './CartContext'
import {addDoc, collection, getFirestore } from 'firebase/firestore';

const Cart = () => {
  const { cart , removeItem , clear, totalCart} = useContext(CartContext)

    const cartList = cart.map(item=>{
      const list ={
        id: item.itemData.id,
        name: item.itemData.name,
        cantidad: item.num
      }
      return list
    })

    const buyCart = (ev)=>{
      ev.preventDefault();
      const compra = {
        user:{nombre:ev.target.nombre.value,
          correo:ev.target.correo.value,
          direccion:ev.target.direccion.value},
        items:cartList,
        total: totalCart()      
      }  
      saveToFirestore(compra)
    }

    const saveToFirestore = (compra)=>{
      const db = getFirestore();
      const pedidosCollection = collection(db,'pedidos')
      addDoc(pedidosCollection,compra).then((response)=>{
        console.log(response.id);
      })
    }

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
                <th>Subtotal: $ {totalCart()}</th>
              </tr>
            </tfoot>
          </table> 
          <label className="btn btn-sm" onClick={clear}>Limpiar</label>
          <label className="btn modal-button btn-sm" htmlFor='my-modal'>Comprar</label>
          <input type="checkbox" id="my-modal" className="modal-toggle" />
          <div htmlFor='my-modal' className='modal'>
            <div className='modal-box'>
            <label htmlFor="my-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
              <form onSubmit={ev=>buyCart(ev)} className='grid gap-4'>
                <label>Informacion de contacto</label>
                <label className='input-group grid grid-cols-7'>
                  <span className='col-span-2'>Nombre: </span>
                  <input type='text' name='nombre' className='input col-span-5 w-full max-w-xs bg-base-200'></input>
                </label>                
                <label className='input-group grid grid-cols-7'>
                  <span className='col-span-2'>Correo: </span>
                  <input type='text' name='correo' className='input col-span-5 w-full max-w-xs bg-base-200'></input>
                </label>                
                <label className='input-group grid grid-cols-7'>
                  <span className='col-span-2'>Direccion: </span>
                  <input type='text' name='direccion' className='input col-span-5 w-full max-w-xs bg-base-200'></input>
                </label>
                <button className="btn btn-sm" type='submit'>Confirmar Compra</button>               
              </form>
            </div>
          </div>     
        </div>
      </div> 
    </div>
  )

}

export default Cart