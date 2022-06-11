import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import logo from './img/1PNG LOGO.png'

const NavBar = () => {
  return (
    <div className="navbar bg-base-100">
        <div className="navbar-start">
            <Link to='/'><img src={logo} width="120" height="120"
            alt="Logo bomba di ciocolatta" /></Link>
        </div>
        <div className="navbar-center">
            <Link to='/' className="btn btn-ghost normal-case text-xl">Inicio</Link>
            <Link to='/productos' className="btn btn-ghost normal-case text-xl">Producto</Link>
            <Link to='/galeria' className="btn btn-ghost normal-case text-xl">Galeria</Link>
        </div>
        <div className="navbar-end">
            <CartWidget></CartWidget>
        </div>        
    </div>
  )
}

export default NavBar