import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Homepage from '../page/Homepage'
import Main from '../assets/components/Main'
export default function Router() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/ >} />  
        <Route path='/Section' element={<Section/ >} />  
        <Route path='/Editepage' element={<Main/ >} />  
      </Routes>
      
      </BrowserRouter>
    </div>
  )
}
