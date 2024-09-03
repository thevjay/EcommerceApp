import React, { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Nav from './comp/Nav'
import Home from './comp/Home'
import Login from './comp/Login'
import Reg from './comp/Reg'
import Logout from './comp/Logout'
import Cart from './comp/Cart'
import UpdProd from './comp/UpdProd'
import AddProduct from './comp/AddProduct'
import Km from './comp/Km'
import Fpwd from './comp/Fpwd'
import './App.css'
import Ct from './comp/Ct'

const App = () => {
  let [usercon,setUsercon]=useState({"_id":"","name":"","token":"","role":""})
  let updcont=(obj)=>{
    setUsercon({...usercon,...obj})
  }
  let obj={"usercon":usercon,"updcon":updcont}
  return (
    <BrowserRouter>
      <Ct.Provider value={obj}>
        <Nav/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/reg' element={<Reg/>}/>
            <Route path='/logout' element={<Logout/>}/>
            <Route path='/cart/' element={<Cart/>}/>
            <Route path='/upd' element={<UpdProd/>}/>
            <Route path='/addprod' element={<AddProduct/>}/>
            <Route path='/km' element={<Km/>}/>
            <Route path='/fpwd' element={<Fpwd/>}/>
        </Routes>    
      </Ct.Provider>
    </BrowserRouter>
  )
}

export default App
