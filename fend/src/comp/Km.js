import React, { useContext, useEffect, useState } from 'react'
import Ct from './Ct'
import axios from 'axios'
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
const Km = () => {
    let [rv,setRv]=useState({"desc":""})
    const [value, setValue] = useState(2);
    const [hover, setHover] = useState(-1);
    let navigate=useNavigate()
   
    let fun=(e)=>{
        setRv({...rv,[e.target.name]:e.target.value})
    }
    let obj=useContext(Ct)
    let [item,setItem]=useState({"reviews":[]})
    useEffect(()=>{
      if(obj.usercon.token=="" || obj.usercon.prod==undefined)
      {
navigate("/login")
      }
      else{
        setItem(obj.usercon.prod)
      }
        

    },[])

    let addcart=(x)=>{

    }

    let addrv=()=>{
        axios.put("http://localhost:5000/addrv",{"name":obj.usercon.name,"pid":item._id,...rv,"rating":value},{"headers":{"Authorization":obj.usercon.token}}).then((res)=>{
            setItem(res.data)
            setRv({"desc":""})
            setValue(2)
            
        })
    }
  return (<>
    <div className="prod">
    <div className="pimg">
        <img src={`http://localhost:5000/imgs/${item.pimg}`}/>
    </div>
    <p>Name:{item.name}</p>
    <p>Cat:{item.cat}</p>
    <p>Price:{item.price}</p>
    <p>Discount:{item.dct}</p>
    <p>Desc:{item.desc}</p>
    <div>   </div>
    { obj.usercon.token!=""&&   <button onClick={()=>addcart(item)}>Addcart</button>}
    
</div>
<div>
    {item.reviews.map((rvw)=>{
        return(
            <div>
                <p>Name:{rvw.name}</p>
                <p>Desc:{rvw.desc}</p>
                <Rating name="half-rating-read" defaultValue={rvw.rating} precision={0.5} readOnly />
                </div>
        )
    })}
</div>

{ obj.usercon.token!=""&&obj.usercon.role=="user"&&<div>
    <input type='text' placeholder='enter review' onChange={fun} value={rv.desc} name='desc'/>
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      
    </Box>
    <button onClick={addrv}>Add review</button>
    

</div>}

</>
  )
}

export default Km

