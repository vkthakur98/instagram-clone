import { useContext,useEffect}  from 'react'
import UserContext  from '../Context/userContext/UserContext'
import img from "../images/Jin Kamaza.jpg"
import "../Css/viewstory.css"

const ViewStory = () => {
 //declaring variables 
  const Context = useContext(UserContext)
  let fill_lines = document.getElementsByClassName("fill-line");
  let i = 0;
  useEffect(()=>{    
    document.getElementsByClassName("fill-line")[0].style.width="100%";
  },[])

  console.log("This is fill line:",fill_lines)
  window.onclick = (e)=>{
    if(e.pageX>(370/2))
    {
      i++;
      fill_lines[i].style.width="100%";
      fill_lines[i-1].style.width="100%";  
      fill_lines[i-1].style.transition="none";
      console.log(i)
    }
    

    else{
        i--;
        document.getElementsByClassName("fill-line")[i].style.width="0%";
        document.getElementsByClassName("fill-line")[i].style.transition="30s";
        document.getElementsByClassName("fill-line")[i+1].style.width="0%";
        document.getElementsByClassName("fill-line")[i+1].style.transition="none";
        console.log(i)
    }
    
  }
      

  return (
    <div className='viewstory-main'>
    <img alt='propimg' src={img}/>
    <div className='overlay-story-optios'>
      <div>
        <div className='lines'>
        {
          Context.stories.map(()=>{
           return  <div className='line'>
            <div className='fill-line'> 

            </div>
            </div>
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
