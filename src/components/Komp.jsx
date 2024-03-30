import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

function Komp() {
  return (
    <div>
      <div className="komp__links">
        <NavLink to="lenova" className="komp__links-link" >Lenova</NavLink>
        <NavLink to="acer" className="komp__links-link" >Acer</NavLink>
        <NavLink to="asus" className="komp__links-link" >Asus</NavLink>
      </div>
      <Outlet/>
    </div>
  )
}

export default Komp