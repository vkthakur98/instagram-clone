import { useContext,useEffect, useRef, useState}  from 'react'
import UserContext  from '../Context/userContext/UserContext'
import img from "../../images/Jin Kamaza.jpg"
import "../../Css/viewstory.css"

const ViewStory = () => {
 //declaring variables 
  const Context = useContext(UserContext)
  let fill_lines = useRef(new Array());
  const time = 10000
  const [index,setIndex] = useState(0);

  useEffect(()=>{
    fill_lines.current[index].style.width="100%"   
  })

  let intrvl =  setInterval(()=>{
    setIndex(index+1)
    if(index<=2)
    {
        fill_lines.current[index].style.width="100%"
    }
    else
    {
        clearInterval(intrvl)
    }  
},time)

  return (
    <div className='viewstory-main'>
    <img alt='propimg' src={img}/>
    <div className='overlay-story-optios'>
      <div>
        <div className='lines'>
        {
          Context.stories.map((item)=>{
           return(  
           <div key={Math.random()}  className='line'>
            <div ref={(item)=>fill_lines.current.push(item)} className='fill-line'>
              {item.username}
            </div>
            </div>
            )
          })
        }
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
