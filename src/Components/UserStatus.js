import React from 'react'
import "../Css/userstatus.css"
import userimg from "../images/Jin Kamaza.jpg"

const UserStatus = () => {
  return (
    <>
    <div style={{padding:"5px"}}>
    <div className='user-status'>
    <img src={userimg} height={"63px"} width={"63px"} alt='user-img' />    
    </div>
    <span className='user-name'>Name</span>
    </div>
    </>
    )
}

export default UserStatus
