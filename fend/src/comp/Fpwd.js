import {useState} from 'react'

import axios from 'axios'
const Fpwd = () => {
    let [data,setData]=useState({"_id":"","pwd":""})
  let [msg,setMsg]=useState("")


  let fun=(e)=>{
    setData({...data,[e.target.name]:e.target.value})

  }
  let login=()=>{
    axios.post("http://localhost:5000/restpwd",data).then((res)=>{
      
        setMsg(res.data.msg)
      
    


    })
  }
  return (
    <div className='formcon'>
      <div className='form'>
        <div className='msg'>{msg}</div>
        <input type='text' placeholder='enter email' name="_id" onChange={fun} value={data._id}/>

        <input type='password' placeholder='enter new password' name="pwd" onChange={fun} value={data.pwd}/>
        <button onClick={login}>Rest</button>
         
      </div>

    </div>
  )
}

export default Fpwd
