import StatusContext from "../statusContext/StatusConext";
import React from 'react'

const StatusData = () => {
    
    const all_status = {
        user_name:"Vivek",
        user_picture:"https://picture.com/userpicture32323ssd",
        status_picture:"https://instagram_clone.com/user/userprofile",
    }
    
  
    return (
    <StatusContext.Provider value={{all_status}}>
        {props.children}
    </StatusContext.Provider>  )
}

export default StatusData







