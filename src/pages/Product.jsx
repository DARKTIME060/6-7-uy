import { useState } from "react"
import { Link, NavLink, Outlet } from "react-router-dom"

function Product() {
  return (
    <div className="product">
      <div className="product__links">
        <NavLink to="komp" className="product__links-link">Компютеры</NavLink>
        <NavLink to="televizor" className="product__links-link">Телевизоры</NavLink>
        <NavLink to="nout" className="product__links-link">Ноутбуки</NavLink>
      </div>
      <Outlet />
    </div>
  )
}

export default Product