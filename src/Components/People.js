import React from 'react'
import img from "../images/girlimg.jpg"
import "../Css/people.css"
import FooterNav from './FooterNav'


const People = ({name,fstatus}) => {
  return (
  <>
  <FooterNav></FooterNav>
    <div className='people'>
        <div className='people-img'>
        <img alt='people-img' src={img} height={"80px"} width={"80px"} />
        </div>
        <div className='name-status'>
            <span className='p-name'>{name}</span>
            <span className='f-status'>{fstatus?"Follows You":"You may know"}</span>
        </div>
        <div className='follow-btn'>
            <button>Follow</button>
        </div>
    </div>  
    </>
  )
}

export default People
