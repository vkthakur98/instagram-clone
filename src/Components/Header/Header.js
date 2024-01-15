import React from 'react'
import "../Css/header.css"
import logo_img from  "../images/Logo-Instagram.png"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div className='insta-header'>
      <img src={logo_img} height={"40px"} width={"100px"} alt='instagram' /><div className='icon-container'><i className="fa-regular fa-heart"></i><Link to="/messages"><i className="fa-brands fa-facebook-messenger"></i></Link></div>
    </div>
    </>
  )
}

export default Header
