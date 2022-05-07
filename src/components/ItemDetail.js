import React from 'react'


const ItemDetail = ({data}) => {
  return (
      <div className='card px-8 md:card-side bg-base-100 shadow-xl'>
        <img className='object-cover h-auto w-auto  md:w-2/3' src={data.img}/>
        <div className='card-body items-center text-center'>
          <h2 className='card-title text-4xl'>{data.name}</h2>
          <p className='text-xl'>Descripción: {data.description}</p>
          <label className='text-4xl'>${data.price}</label>
          <label htmlFor="my-modal-4" className="btn modal-button">Agregar a Carro</label>
          <input type="checkbox" id="my-modal-4" className="modal-toggle" />
          <label htmlFor="my-modal-4" className="modal cursor-pointer">
            <label className="modal-box relative">
              <h3 className="text-lg font-bold">Sin Stock</h3>
            </label>
          </label>
        </div>
      </div>    
  )
}

export default ItemDetail