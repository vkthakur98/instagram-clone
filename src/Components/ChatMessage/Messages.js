import React from 'react'
import "../Css/messages.css"

const Messages = () => {
  return (
    <div>
      <div className='message-header'>
        <div><i className='fa fa-arrow-left'></i><span>_Vk_thakur</span></div><div><i className="fa-solid fa-video"></i><i className="fa-regular fa-pen-to-square"></i></div>
      </div>
      <div className='searchbar'>
        <input type='text' placeholder='Search'/>
      </div>
      <div className='msg'>
        <div><div className='profile-pic-name'></div><i className='fa fa-camera'></i></div>
      </div>
    </div>
  )
}

export default Messages
