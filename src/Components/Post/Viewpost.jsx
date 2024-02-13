import React, { useEffect } from 'react'
import Post from "./Post"
import { useContext } from 'react'
import UserContext from "../Context/userContext/Context";
import { useLocation, useNavigate } from 'react-router-dom';

const Viewpost = () => {
  const context = useContext(UserContext);
  const { state } = useLocation();
  const navigate = useNavigate()
  
  let currentuser = {}
  const span_style = {
    color: "white",
    fontFamily: "verdana",
    fontWeight: "Bold"
  }
  context.posts.forEach((post) => {
    if (post.postid === state.postid) {
      currentuser = post;
    }
  })


  return (
    <>
      <div style={{ padding: "10px" }}>
        <i style={{ fontSize: "17px" }} onClick={()=>{navigate(-1)}} className='fa fa-arrow-left'></i><span style={span_style}>Explore</span>
      </div>
      <div>
        {
          <>
            <Post pagename={currentuser.pagename} pagepic={currentuser.pageprofile_pic} postid={state.postid} ></Post>
            {
              context.posts.map((post) => {
                return <Post pagename={post.pagename} pagepic={post.pageprofile_pic} postid={post.postid} key={post.postid}></Post>
              })
            }
          </>
        }
      </div>
    </>
  )
}

export default Viewpost
