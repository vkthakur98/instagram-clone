import React from 'react'
import "../../Css/footer.css"
import { Link } from 'react-router-dom'
const FooterNav = React.forwardRef((props,ref) => (  
   <div className='footer-nav' ref={ref} style={{background:"black",position:"fixed",bottom:"-1%",left:"0",zIndex:100}}>
      {/* <div className='reel-seeker-main'>
            <div className='seeker-bar'>                    
            </div>
      </div>   */}
        <div className='footer-icons'>
        <Link to="/home">
        <div><i className='fa fa-house'></i></div>        
        </Link>
       <Link to="/explore">
       <div><i className="fa-solid fa-magnifying-glass"></i></div>
       </Link>
       <div><i style={{border:"2px solid white",padding:"2px",borderRadius:"10px"}} className='fa fa-plus'></i></div>
       <Link to="/reels">
       <div><i className="fa-solid fa-play"></i></div>
       </Link>
       <Link to="/profile">
       <div><i className='fa fa-user'></i></div> 
       </Link> 
      </div>
    </div>
  ));

export default FooterNav
