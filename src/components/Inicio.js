import React from 'react'
import { Link } from 'react-router-dom'
import img4 from './img/img_4.jpeg'

const Inicio = () => {
  return (
    <div className="card px-8 md:card-side bg-base-100 shadow-xl">
        <img className="object-cover h-auto w-auto md:h-1/3 md:w-1/3" src={img4}/>
        <div className="card-body">
            <h2 className="card-title">Conoce nuestros productos</h2>
            <p> Chocolate, cacao y malvaviscos ¿Que mejor?
                <br/>¡Disfruta la dulzura de un exquisito chocolate caliente
                <br/>en una bomba de sabor y sensaciones!
                <br/>
                <br/>¡Bombas de chocolate caliente! Solo agrega leche hirviendo y vive la experiencia Bomba di Cioccolata.</p>
            <div className="card-actions justify-end">
                <Link to={'/productos'} className="btn btn-primary">Revisar productos</Link>
            </div>
        </div>
    </div>
  )
}

export default Inicio