import React from 'react'
import logo from '../images/logo.jpg'
import { NavLink, Outlet } from 'react-router-dom'
function Navbar() {
  return (
    <nav className='navbar'>
      <div className="container">
        <a href="#" className="nav__logo">DARKTIME</a>
        <div className="nav__list">
          <NavLink to="/" className="nav__link">Главная</NavLink>
          <NavLink to="/product" className="nav__link">Продукты</NavLink>
          <NavLink to="/basket"  className="nav__link">Корзина</NavLink>
          <NavLink to="/info"  className="nav__link">О нас</NavLink>
          <NavLink to="/contact"  className="nav__link">Связь</NavLink>
        </div>
        <a href="#" ><img className="nav__img" src={logo} alt="logo" /></a>
      </div>
    </nav>
  )
}

export default Navbar