import React, { useContext } from 'react'
import {CartContext} from './CartContext'


const ItemDetail = ({data}) => {

  const {addItem} = useContext(CartContext)

  return (
      <div className='card px-8 md:card-side bg-base-100 shadow-xl'>
        <img className='object-cover h-auto w-auto  md:w-2/3' src={data.img}/>
        <div className='card-body items-center text-center'>
          <h2 className='card-title text-4xl'>{data.name}</h2>
          <p className='text-xl'>Descripción: {data.description}</p>
          <label className='text-4xl'>${data.price}</label>
          <label className="btn" onClick={()=>{addItem(data.id)}}>Agregar a Carro</label>
        </div>
      </div>    
  )
}

export default ItemDetail