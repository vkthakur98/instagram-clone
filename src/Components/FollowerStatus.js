import React from 'react'
import "../Css/userstatus.css"
// import userimg from "../images/girlimg.jpg"

const FollowerStatus = ({userimg,username}) => {
  return (
    <>
    <div style={{padding:"5px"}}>
    <div className='follower-status'>
    <img src={userimg} height={"63px"} width={"63px"} alt='user-img' />    
    </div>
    <span className='user-name'>{username}</span>
    </div>
    </>
    )
}
export default FollowerStatus
