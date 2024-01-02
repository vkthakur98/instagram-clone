import React, { useEffect, useRef, useState } from 'react'
import "../Css/reels.css"
import video from "../reels/reel1.mp4"
import video2 from "../reels/reel2.mp4"
import video3 from "../reels/reel3.mp4"

const Reels = () => {
    const [mute, setMutestate] = useState(false);
    const reelvideo = useRef(new Array());
    const reeldiv = useRef(new Array(
    )) 
    const muteunmuteicon = useRef("")
    const muteunmutediv = useRef("")


    //contains reel videos//
    // let reel_videos;
    //useEffect is used to play the first reel automatically//
    useEffect(() => {
        reelvideo.current[0].play();
        //  reel_videos = Array.from(document.getElementsByClassName("reel"));
    })


    //declaring variables for translating the videos in upper or lower dierections
    let startY,scrolled = 0,reelindex=0;
2
    //to update the seekbar width with the video's current time//
    const handleTimeUpdate = () =>
    {
    let videoELement = reelvideo.current[reelindex];
    let videoplayed = parseInt((videoELement.currentTime/videoELement.duration*100));
    document.getElementsByClassName("seeker-bar")[0].style.width=videoplayed+"vw";
    }
    
    document.getElementsByClassName("reel-seeker-main")[0].addEventListener("touchstart",(e)=>{
        console.log(e.touches[0].clientY)
    })

    //when user will start to swipe on the screen this function will be executed//
    const handleTouchStart = (e) => {
        startY = e.touches[0].clientY;
    }

    //this function will calcualte the difference made in y axis by swiping//
    const handleTouchEnd = (e) => {
     let scrolled_diff = startY - e.changedTouches[0].clientY;
     if(scrolled_diff>0)
     {
        // console.log("Touchend ClientY:"+e.changedTouches[0].clientY+", Difference:"+(startY-e.changedTouches[0].clientY))
        scrolled = scrolled+100;
        reelindex=reelindex+1;
        console.log("Reelindex:",reelindex,"Scrolled Area:",scrolled);
        reeldiv.current.forEach((reel)=>{
            reel.style.transform="translateY(-"+scrolled+"vh";
        })
        reelvideo.current[reelindex].play();
        reelvideo.current[reelindex-1].pause();

    }
     else if(scrolled_diff ===0)
     {
        //do nothing
     } 
     else if(scrolled_diff<0)
     { 
        scrolled = scrolled-100;
        reelindex=reelindex-1;
        console.log("Reelindex:",reelindex,"Scrolled Area:",scrolled);
        reeldiv.current.forEach((reel)=>{
            reel.style.transform="translateY(-"+scrolled+"vh";
        })
        reelvideo.current[reelindex].play();
        reelvideo.current[reelindex+1].pause();
     }
    }
    //I am not able to scroll the video by the function touchStart and touchEnd

    const reelvideos = [
        {
            reelId: "r01",
            src: video
        },
        {
            reelId: "r02",
            src: video2
        },
        {
            reelId: "r03",
            src: video
        },
        {
            reelId: "r04",
            src: video3
        }
    ]

    const handleCLick = (e) => {
            console.log(reeldiv.current)
        if (!mute) {
            // e.target.muted = true;
            setMutestate(true);
            muteunmuteicon.current.classList.remove("fa-volume-high");
            muteunmuteicon.current.classList.add("fa-volume-xmark");
            muteunmutediv.current.style.transform="scale(1)";
            setTimeout(()=>{ 
            muteunmutediv.current.style.transform="scale(0)";
            },1000)
        }
        else {
            muteunmuteicon.current.classList.remove("fa-volume-xmark");
            muteunmuteicon.current.classList.add("fa-volume-high");
            // e.target.muted = false;
            setMutestate(false);
            muteunmutediv.current.style.transform="scale(1)";
            setTimeout(()=>{
            muteunmutediv.current.style.transform="scale(0)";
            },1000)
        }
    }

console.log(reeldiv)

    return (
        <div className='reel-videos-container'>
            <div className='reel-head'>
                <div>
                    <span>Reels</span><i className='fa fa-camera'></i>
                </div>
            </div>
            <div className='mute-unmute-icon' ref={muteunmutediv}>
                <i className='fa fa-volume-xmark mute-icon' ref={muteunmuteicon} ></i>
            </div>            
            {   
                reelvideos.map((reel) => {
                    return( 
                    <div className='reel' ref={(rdiv)=>{reeldiv.current.push(rdiv)}}  key={reel.reelId}>
                        <video ref={(elem)=>{reelvideo.current.push(elem)}} className='reel-video' src={reel.src} onTouchStart={(e)=>{handleTouchStart(e)}} onTouchEnd={(e)=>{handleTouchEnd(e)}} onClick={(e)=>{handleCLick(e)}} onTimeUpdate={()=>{handleTimeUpdate()}} loop muted={mute}  />
                    </div> 
                    )
                })
            }
        </div>
    )
}

export default Reels
