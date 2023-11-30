import {Link} from "react-router-dom"
import "../Css/post.css"
const Post = (props) => {
  const userData = {
    name:props.pagename,
    pagepic:props.pageprofile_pic,
    postid:props.postid,
  }
  return (
    <div>
      <div>
        <div className='image-post'>
            <div className='header-post'>
            <div className='pagename-img'>
                <img src={props.pagepic} alt='page-profile-pic' />
                <div>
                <Link style={{textDecoration:"none"}} to={{pathname:"/userprofile"}} state={userData}><span>{props.pagename}</span></Link><br></br>
            <span>{props.audioname?props.audioname:"Facebook"}</span>           
                </div>                
                </div>
            <div>
                <span><i className="fa-solid fa-ellipsis-vertical"></i></span>
            </div>
            </div>
            <div className='body-post'>
                <img src={props.pagepic} alt='post-img' />
                <div className='post-actions-wrap'>
                  <div className='post-actions'><div className='post-action-lcs'><div><i className="fa-solid fa-heart"></i></div><div><i className="fa-solid fa-comment"></i></div><div><i className="fa-solid fa-paper-plane"></i></div></div><div className='post-action-save'><div><i className="fa-solid fa-bookmark"></i></div></div></div>
                </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Post
