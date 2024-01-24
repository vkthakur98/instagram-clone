import React, { useContext } from 'react'
import UserStatus from './UserStatus'
import UserContext from '../Context/userContext/UserContext'
import FollowerStatus from './FollowerStatus'
import { Link,useLocation } from 'react-router-dom' 

const StorySection = () => {
  let location = useLocation();
  const Context = useContext(UserContext)
  
    return (
    <>
    <div className='story-container'>
    <UserStatus/> 
    {
      Context.stories.map((user,index)=>{
          return <Link key={user.username} to="/status">
          <FollowerStatus key={user[index].username} userimg={user[index].picture} username={user[index].username} />
          </Link>
      })
    }
    </div> 
    </>
  )
}

export default StorySection
