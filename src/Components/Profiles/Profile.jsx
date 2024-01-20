import React from 'react'
import "../../Css/profile.css"
import People from './People'

const Profile = () => {
    const user = {
        username: "_Vk_thakur",
        profile_pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHo41BJ-g4wME4x1AK8ww4b3FP_kYYX2B-dg&usqp=CAU",
    }
    

    const peoples = [
        {
            pid:"2ds32erw3",
            name: "Smriti Jha",
            fstatus: false,
        },
        {
            pid:"2sffs323",
            name: "Ravi Kumar",
            fstatus: true,
        },
        {
            pid:"2ds32dsd3",
            name: "Vishal Verma",
            fstatus: false,
        },
        {
            pid:"2ds32dkjs",
            name: "Neeraj",
            fstatus: true,
        }
    ]
    return (
        <>
            <div className='pf-header'>
                <div>{user.username}</div><div><i style={{ border: "2px solid white", padding: "2px", borderRadius: "10px", marginRight: "10px" }} className='fa fa-plus'></i><i className="fa-solid fa-bars"></i></div>
            </div>
            <div className='profile'>
                <div className='profile-pic-followers-contain'>
                    <div className='profile-pic-followers'>
                        <img className='profile-pic' alt='profile-pic' src={user.profile_pic} height={"80px"} width={"80px"} /><div className='follower-post-count'><div className='posts'><span className='s-numbers'>54</span><span className='unit'>Posts</span></div><div className='posts'><span className='s-numbers'>70</span><span className='unit'>Followers</span></div><div className='posts'><span className='s-numbers'>68</span><span className='unit'>Following</span></div></div>
                    </div>
                    <div className='user-bio'>
                        <span style={{ fontWeight: "bold" }}>Vivek Kumar Thakur</span><br></br>
                        <span>Computer Programming</span><br></br>
                        <span>Full Stack Developer</span><br></br>
                        <a href='https://www.vivekcodes.com'>vivekcodes.com</a>
                        <div className='edit-share-profile-contain'>
                            <div className='edit-share-profile'><button className='following-button'>Edit Profile</button><button className='following-button'>Share Profile</button><button className='following-button' style={{width:"50px",padding:"5px"}}><i className='fa-solid fa-user-plus' style={{ fontSize: "17px", padding: "0px" }}></i></button></div>
                        </div>
                        <div className='peoples-list-head'><span>Discover people</span><span>See all</span></div>
                        <div className='peoples-list'>
                            {
                                peoples.map((people) => {
                                    return <People name={people.name} fstatus={people.fstatus} key={people.pid} />
                                })
                            }
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}
export default Profile
