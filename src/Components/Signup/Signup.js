import React, { useState } from 'react'
import Name from "./Name"
import Password from './Password'
import Username from './Username'
import Age from './Age'



const Signup = () => {
const [comp,setComp] = useState(<Name/>);
const [i,setI]  = useState(0);
const Components = [Name,Password,Age];
const nextField = ()=>{
setI(i+1)
setComp(Components[i+1])
console.log(i)
}
const prevField = ()=>{
if(i=>0)
{
setI(i-1)
setComp(Components[i])
console.log(i)
}  
    }

  return (
    <>
        <i className='fa fa-arrow-left' onClick={()=>{prevField()}} ></i>
    <div className='signup'>
        {comp}
      <button onClick={()=>{nextField()}}>Next</button>
    </div>
    </>
  )
}

export default Signup
