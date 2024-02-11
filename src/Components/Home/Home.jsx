import React from 'react'
import Post from "../Post/Post"
import Header from '../Header/Header';
import StorySection from '../Story/StorySection';
import { useContext }  from 'react'
import UserContext from "../Context/userContext/Context";
import FooterNav from '../Footer/FooterNav';

const Home = () => {
  const context = useContext(UserContext);
  return (
    <>  
    <FooterNav></FooterNav>  
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
