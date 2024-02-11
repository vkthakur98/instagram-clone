import React, { useContext } from 'react'
import UserStatus from './UserStatus'
import UserContext from '../Context/userContext/Context'
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
          return <Link key={index} to={`/status/${user[index].username}/${index}`}>
          <FollowerStatus key={user[index].username} userimg={user[0].userpic} username={user[index].username} />
          </Link>
      })
    }
    </div> 
    </>
  )
}

export default StorySection
