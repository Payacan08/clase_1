import React, { useContext } from 'react'
import {CartContext} from './CartContext'
import './img/img_3.jpeg'

const ItemDetail = ({data}) => {

  const {addItem} = useContext(CartContext)

  return (
      <div className='card px-8 md:card-side bg-base-100 shadow-xl'>
        <img className='object-cover h-auto w-3/5' src={data.img}/>
        <div className='card-body items-center text-center'>
          <h2 className='card-title text-4xl'>{data.name}</h2>
          <p className='text-xl'>Descripción: {data.description}</p>
          <label className='text-4xl'>${data.price}</label>
          <label className="btn" onClick={()=>{addItem(data)}}>Agregar a Carro</label>
        </div>
      </div>    
  )
}

export default ItemDetail