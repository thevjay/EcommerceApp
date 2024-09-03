import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Ct from './Ct'

const Nav = () => {
  let obj=useContext(Ct)
  return (
    <div className='nav'>
        <Link to="/">Products</Link>
     { obj.usercon.token==""&&  <Link to="/login">Login</Link>}
     { obj.usercon.token==""&&   <Link to="/reg">Register</Link>}
     { obj.usercon.token!==""&&obj.usercon.role=="admin"&&   <Link to="/addprod">Addprod</Link>}
        { obj.usercon.token!==""&&    <Link to="/cart">Cart <button>{obj.usercon.nofitems}</button></Link>}
        { obj.usercon.token!==""&&   <Link to="/logout">Logout</Link>}
       { obj.usercon.token!==""&&  <div>{obj.usercon.name}</div>}
    </div>
  )
}

export default Nav
