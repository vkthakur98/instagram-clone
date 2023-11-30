import React from 'react'
import Post from "./Post"
import Header from './Header';
import StorySection from './StorySection';
import { useContext }  from 'react'
import UserContext from "./Context/userContext/UserContext";

const Home = () => {
  const context = useContext(UserContext);
  return (
    <>    
    <Header/>
    <StorySection/>       
    <div>
      {
       context.posts.map((post) => {
          return <Post pagename={post.pagename} pagepic={post.pageprofile_pic} postid={post.postid}  key={post.postid}  />
        })
      }
    </div>
    </>
  )
}

export default Home
