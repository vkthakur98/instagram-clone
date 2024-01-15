import React, { useContext } from 'react'
import "../Css/SearchPage.css"
import {Link} from "react-router-dom"
import UserContext from "../Context/userContext/UserContext"
import FooterNav from '../Footer/FooterNav'

const SearchPage = () => {
  const context = useContext(UserContext)

  return (
    <>
    <FooterNav></FooterNav>
    <div className='SearchPage' >
      <div className='search-page-input'>
      <input type='text' placeholder='Search' />
      </div>
      <div className='explore-div'>
        {
          context.posts.map((post)=>{
           return(
           <Link to="/viewpost" state={{postid:post.postid}} key={post.postid} >
           <div className='explore-item'>
              <img height={"125px"} width={"125px"} alt='post' src={post.pageprofile_pic} />
           </div>
           </Link>           
           ) 
          })
        }        
      </div>   
    </div>
    </>
  )
}

export default SearchPage
