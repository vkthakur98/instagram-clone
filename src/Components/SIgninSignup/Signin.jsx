import React, {useState, useRef } from 'react'
import "../../Css/Signin.css"
import logo from '../../images/instalogo.png'  
import metalogo from "../../images/metalogo.png"
import { Link,useLocation } from 'react-router-dom'
const Signin = () => {
    const uname_input = useRef("")
    const pwd_input = useRef("")
    const [uname,setUname] = useState("");
    const [password,setPwd] = useState("");

    const getUnamePwd = (e)=>{
        e.target.type==="text"?setUname(e.target.value):setPwd(e.target.value)
    }

    const loginToInsta = ()=>{
        if(uname==="Vivek" && password==="Vk98")
        {
            window.location.href="/home"
        }
        else if(uname==="" || password=="")
        {
            uname_input.current.style.outline="1px solid red"
            uname_input.current.style.border="1px solid red"
            uname_input.current.focus()

        }
    }

    const location = useLocation();
//   location.pathname==="/"?document.getElementsByClassName("footer-nav")[0].style.display="none":""
    return (
        <div className='signin-signup-container-wrap'>
            <div className='signin-signup-container'>
                <div className='insta-logo'>
                    <img src={logo} alt='instalogo' width={70} height={70} />
                </div>
                <div className='signin-signup-input-fields'>
                    <input required  type='text' ref={uname_input} onChange={(e)=>{getUnamePwd(e)}} placeholder='Username, email or mobile number'></input>
                    <input required  type='password' ref={pwd_input} onChange={(e)=>{getUnamePwd(e)}} placeholder='Password'></input>
                    <button onClick={loginToInsta}>Log in</button>
                    <a>Forgot Password?</a>
                </div>
                <div className='new-account-btn'>
                    <Link to="signup"><button>Create New account</button></Link>
                    <img src={metalogo} className='metalogo' alt='metalogo' width={50} height={10} />
                </div>
            </div>
        </div>
    )
}
export default Signin
