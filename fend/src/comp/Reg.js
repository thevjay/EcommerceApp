import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Reg = () => {
    let navigate=useNavigate()
    let [msg,setMsg]=useState("")
    let [data,setdata]=useState({"_id":"","name":"","place":"","phno":"","pwd":"","role":""})
    let fun=(e)=>{
        setdata({...data,[e.target.name]:e.target.value})
    }
    let reg=()=>{
        axios.post("http://localhost:5000/adduser",data).then((res)=>{
            if(res.data.msg=="reg done")
            {
                navigate("/login")
                setMsg("")
            }
            else{
                setMsg(res.data.msg)
            }

        })
    }
  return (
    <div className='formcon'>
        <div className='form'>
            <div className='msg'>{msg}</div>
            <input type='text' placeholder='enter e-mail' value={data._id} onChange={fun} name="_id"/>
            <input type='text' placeholder='enter name' value={data.name} onChange={fun} name="name"/>
            <input type='text' placeholder='enter place' value={data.place} onChange={fun} name="place"/>
            <input type='text' placeholder='enter phno' value={data.phno} onChange={fun} name="phno"/>
            <input type='text' placeholder='enter role' value={data.role} onChange={fun} name="role"/>
            <input type='password' placeholder='enter password' value={data.pwd} onChange={fun} name="pwd"/>
            <button onClick={reg}>Register</button>
        </div>

    </div>
  )
}

export default Reg
