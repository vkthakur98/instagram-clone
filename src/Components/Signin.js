import React, { useEffect } from 'react'
import "../Css/Signin.css"
import logo from '../images/instalogo.png'  
import metalogo from "../images/metalogo.png"
import { Link,useLocation } from 'react-router-dom'
const Signin = () => {
    useEffect(()=>{
        document.getElementsByClassName("footer-nav")[0].style.display="none"
    },[])
    const location = useLocation();
//   location.pathname==="/"?document.getElementsByClassName("footer-nav")[0].style.display="none":""
    return (
        <div className='signin-signup-container-wrap'>
            <div className='signin-signup-container'>
                <div className='insta-logo'>
                    <img src={logo} alt='instalogo' width={70} height={70} />
                </div>
                <div className='signin-signup-input-fields'>
                    <input required type='text' placeholder='Username, email or mobile number'></input>
                    <input required type='password' placeholder='Password'></input>
                    <button>Log in</button>
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
