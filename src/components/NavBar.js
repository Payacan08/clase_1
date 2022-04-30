import React from 'react'
import CartWidget from './CartWidget'
import logo from './img/1PNG LOGO.png'

const NavBar = () => {
  return (
    <div className="navbar bg-base-100">
        <div className="navbar-start">
            <a className=""><img src={logo} width="120" height="120"
            alt="Logo bomba di ciocolatta" /></a>
        </div>
        <div className="navbar-center">
            <a className="btn btn-ghost normal-case text-xl">Inicio</a>
            <a className="btn btn-ghost normal-case text-xl">Producto</a>
            <a className="btn btn-ghost normal-case text-xl">Galeria</a>
            <a className="btn btn-ghost normal-case text-xl">Comunidad</a>
        </div>
        <div className="navbar-end">
            <CartWidget></CartWidget>
        </div>        
    </div>
  )
}

export default NavBar