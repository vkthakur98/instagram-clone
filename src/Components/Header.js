import React from 'react'
import "../Css/header.css"
import logo_img from  "../images/Logo-Instagram.png"

const Header = () => {
  return (
    <>
    <div className='insta-header'>
      <img src={logo_img} height={"40px"} width={"100px"} alt='instagram' /><div className='icon-container'><i className="fa-regular fa-heart"></i><i className="fa-brands fa-facebook-messenger"></i></div>
    </div>
    </>
  )
}

export default Header
