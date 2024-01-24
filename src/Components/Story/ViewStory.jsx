import { useContext,useRef, useState}  from 'react'
import UserContext  from '../Context/userContext/UserContext'
import "../../Css/viewstory.css"

const ViewStory = () => {
 //declaring variables 2900 
  const Context = useContext(UserContext) //getting data using context API
  const fill_lines = useRef(new Array())
  const [img,setImage] = useState(Context.stories[0][0].picture)
  const index = useRef(0)
  const userstoryindex  = useRef(0)
  //this function will be called after the loading completioin of this page


   const handleWindowClick = (e)=>{
    if(e.pageX>(window.innerWidth/2))
    {
      if(userstoryindex.current<=Context.stories.length)
      {
        if(index.current<(Context.stories[userstoryindex.current].length-1))
        {
          index.current++
          setImage(Context.stories[userstoryindex.current][index.current].picture)
          // fill_lines.current[index.current].style.width="100%"
          console.log("current user:",userstoryindex.current,"current index:",index.current)    
        }
        else
        {
              userstoryindex.current++
              index.current = 0;
              if(userstoryindex.current<Context.stories.length)
            {
              console.log("current user:",userstoryindex.current,"current index:",index.current)
              setImage(Context.stories[userstoryindex.current][index.current].picture)
            }
        }
      }   
    }
    else
    {
      if(userstoryindex.current>=0)
      {
        if(index.current>0)
        {
        index.current-- 
        // fill_lines.current[index.current].style.width="10%"
        setImage(Context.stories[userstoryindex.current][index.current].picture)
        // fill_lines.current[(index.current)+1].style.width="0%"
        console.log("UserIndex:",userstoryindex.current," current index:",index.current)
        }
        else
        {
          if(userstoryindex.current>0)
          {
            index.current=0
            userstoryindex.current--
            setImage(Context.stories[userstoryindex.current][index.current].picture)
          }
        } 
      } 
    }           
  }  

  
  return (
    <div onClick={(e)=>{handleWindowClick(e)}} className='viewstory-main'>
    <img alt='propimg' src={img} />
    <div className='overlay-story-optios'>
      <div>
        <div className='lines'>
        {
          Context.stories[userstoryindex.current].map((item)=>{
           return(  
           <div key={Math.random()}  className='line'>
            <div ref={(item)=>fill_lines.current.push(item)} className='fill-line'>
            </div>
            </div>
            )
          })
        }
        </div>
        <div style={{display:'flex',alignItems:"center"}}>
          <img src={Context.posts[userstoryindex.current].pageprofile_pic} style={{height:"40px",width:"40px",borderRadius:"50%",padding:"10px"}}></img><span style={{fontWeight:"bold"}} >{Context.stories[userstoryindex.current][0].username}</span>
        </div>
              </div>
    <div className='replyToStory'>
    <div className='textbox-icon-container'>
    <input type='text' placeholder='Send message'  /><i className='fa fa-heart'></i><i className='fa-solid fa-paper-plane'></i>
    </div>
    </div>
    </div>     
    </div>    
  )
}
export default ViewStory
