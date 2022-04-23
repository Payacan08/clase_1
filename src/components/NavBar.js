import React from 'react'
import CartWidget from './CartWidget'
import logo from './img/1PNG LOGO.png'

const NavBar = () => {
  return (
    <div class="navbar bg-base-100">
        <div class="navbar-start">
            <a class=""><img src={logo} width="120" height="120"
            alt="Logo bomba di ciocolatta" /></a>
        </div>
        <div class="navbar-center">
            <a class="btn btn-ghost normal-case text-xl">Inicio</a>
            <a class="btn btn-ghost normal-case text-xl">Producto</a>
            <a class="btn btn-ghost normal-case text-xl">Galeria</a>
            <a class="btn btn-ghost normal-case text-xl">Comunidad</a>
        </div>
        <div class="navbar-end">
            <CartWidget></CartWidget>
        </div>        
    </div>
  )
}

export default NavBar