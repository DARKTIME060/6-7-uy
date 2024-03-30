import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import Basket from './pages/Basket'
import Contact from './pages/Contact'
import Info from './pages/Info'
import Product from './pages/Product'
import Head from './layout/Head'
import Komp from './components/Komp'
import Televizor from './components/Televizor'
import Nout from './components/Nout'
import Lenova from './components/Lenova'
import Asus from './components/Asus'
import Acer from './components/Acer'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Head />}>
          <Route index element={<Home />} />
          <Route path='product' element={<Product />}>
            <Route path='komp' element={<Komp />}>
              <Route path='lenova' element={<Lenova/>} />
              <Route path='asus' element={<Asus/>} />
              <Route path='acer' element={<Acer/>} />
            </Route>
            <Route path='televizor' element={<Televizor />}>

            </Route>
            <Route path='nout' element={<Nout />}>

            </Route>
          </Route>
          <Route path='basket' element={<Basket />} />
          <Route path='contact' element={<Contact />} />
          <Route path='info' element={<Info />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App