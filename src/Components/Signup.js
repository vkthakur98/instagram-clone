import React,{useRef,useState,useEffect} from 'react'
import {useLocation} from "react-router-dom"
import "../Css/signup.css"


const Signup = (props) => {

  const location = useLocation();
  //Using useref to store the components which will be renderd with map method
  const [name,setName] = useState("");
  const [pwd,setPwd] = useState("");
  const [uname,setUname] = useState("");
  const [mobile,setMobile] = useState("");
  const component  = useRef(new Array);  
  const input_ids = useRef(new Array);
  const userdata = useRef(new Array);
  const errormsg = useRef(new Array);
  const count = useRef(0);

  useEffect(()=>{
    document.getElementsByClassName("footer-nav")[0].style.display="none";
  },[])

  //Elements properties data in array of objects
  const components = [{
    elemid:0,
    type:"text",
    placeholder:"Enter your name",
    lable:"What is your name?",
    value:name,
    errormsg:"You would must have a name, Plese write!"
  },
  {
    elemid:1,
    type:"password",
    placeholder:"Enter your password",
    lable:"Create your password",
    value:pwd,
    errormsg:"Please enter a strong password"
  },
   {
    elemid:2,
    type:"text",
    placeholder:"Enter a username",
    lable:"Create a username",
    value:uname,
    errormsg:"Please enter a valid username" 
  },
  {
    elemid:3,
    type:"number",
    placeholder:"Enter your mobile",
    lable:"Enter your mobile no.",
    value:mobile,
    errormsg:"Please Enter a valid 10 digit mobile number"
  }  
];
  const nextField = ()=>{
    if(count.current<=3)
    {
    if(input_ids.current[count.current].value!=="")   
    {
      if(input_ids.current[count.current].type==="number" && input_ids.current[count.current].value.length!==10)
      {
      input_ids.current[count.current].focus();
      input_ids.current[count.current].style.outline="1px solid red";  
      input_ids.current[count.current].style.border="1px solid red";
      errormsg.current[count.current].innerHTML=components[count.current].errormsg;
      }
      else
      {
        userdata.current.push(input_ids.current[count.current].value)
        component.current[count.current].style.display="none";
        count.current<3?component.current[count.current+1].style.display="block":window.location="/"
        count.current++ 
        console.log(count.current)
        // console.log(count.current)
        console.log(userdata.current)
    
      }
       }
    else{
    input_ids.current[count.current].focus();
    input_ids.current[count.current].style.outline="1px solid red";  
    input_ids.current[count.current].style.border="1px solid red";  
    errormsg.current[count.current].innerHTML = components[count.current].errormsg;
    }
    }
    else
    {
    
    }
  }

  const previousField = ()=>{
    if(count.current>0)
    {
    count.current=count.current-1;
    component.current[count.current].style.display="block";
    component.current[count.current+1].style.display="none";
    // console.log(count)
    }
  }

  const changeText = (e)=>{
    if(e.target.placeholder==="Enter your name")
    {
      setName(e.target.value)  
    }
    else if(e.target.placeholder==="Enter your password"){
      setPwd(e.target.value)
    } 
    else if(e.target.placeholder==="Enter a username")
    {
      setUname(e.target.value)
    }
    else if(e.target.placeholder==="Enter your mobile")
    {
      setMobile(e.target.value)
    }
  }

  return (
 <>
      <i onClick={previousField} className='fa fa-arrow-left'></i>
    <div className='signup'>
     <div className='components'>
    {
      components.map((item)=>{
        return (<div key={item.elemid} className='component' ref={(elem)=>{component.current.push(elem)}}>
          <h3>{item.lable}</h3>
          <input type={item.type}  placeholder={item.placeholder} ref={(inputtext)=>{input_ids.current.push(inputtext)}} 
          value={item.value} onChange={(e)=>{changeText(e)}}  
          />
          <span style={{color:"red"}} ref={(elem)=>{errormsg.current.push(elem)}}></span>
          </div>)

      })
    }
    </div>
      <div className='signup'>
        <button onClick={nextField}>Next</button>          
     </div> 
    </div>
    </>
  )
}


export default Signup