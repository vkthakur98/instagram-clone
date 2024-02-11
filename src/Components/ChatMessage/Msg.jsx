import React from 'react';
import "./msg.css"

const Message = ({ username, text, sender }) => {
  return (
  <div className="message">  
      {/* <p className="message-username">{username}</p> */}
      {sender?<p style={{color:"white"}} className="message-sender">{text}</p>:<p style={{color:"white"}} className="message-reciever">{text}</p>}
  </div>
  );
};

export default Message;