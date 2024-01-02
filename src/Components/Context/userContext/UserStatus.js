// import { useState } from "react";
import { useEffect, useState } from "react";
import UserContext from "./UserContext";
import axios from 'axios'

const UserStatus = (props)=>{

  const [posts,setPost] = useState([])

  useEffect(()=>{
    axios.get("/me")
    .then((response)=>{
      setPost(response.data)
    }).catch((err)=>{console.log(err)})
  },[])

      const stories = [
        [
          {
            storyno:0,
            username:"username1",
            picture:"picture",
          },
          {
            storyno:0,
            username:"username1",
            picture:"picture",
          }
        ],
        {
            storyno:1,
            username:"username2",
            picture:"picture2",
        },
        {
            storyno:2,
            username:"username3",
            picture:"picture3",
        }
        ]

return(
     <UserContext.Provider value={{posts,stories}}>
        {
        props.children
        }
    </UserContext.Provider>
    )
}
export default UserStatus;