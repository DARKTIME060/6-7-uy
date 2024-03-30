import { Outlet } from 'react-router-dom'
import React from 'react'
import Navbar from '../components/Navbar'


function Head() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Head