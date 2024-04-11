import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Products from '../products/Products';
import Classes from '../classes/Classes';
import Home from '../home/Home';





const Routers = () => {
  return (
    <div className='app-css'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products />} />
        <Route path='/classes' element={<Classes />} />
    
        {/* <Route path='/signup' element={<Register />} />
        <Route path='/signin' element={<LoginForm />} /> */}
        <Route path='/dash' element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default Routers
