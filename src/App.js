import Home from './Components/Home';
import FooterNav from './Components/FooterNav';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExplorePage from './Components/ExporePage';
import Profile from './Components/Profile';
import Reels from './Components/Reels';
import UserProfile from './Components/UserProfile';
import UserStatus from './Components/Context/userContext/UserStatus';
import Viewpost from './Components/Viewpost'
import ViewStory from './Components/ViewStory';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import { useRef,createRef } from 'react';


function App() {

  const navstate = createRef();

  return (
    <> 
      <UserStatus>
        <BrowserRouter>
          <FooterNav ref={navstate}></FooterNav>
          <Routes>
            <Route path='/' element={<Signin/>} >
            </Route>
            <Route path='/home' element={<Home/>} >
            </Route>
            <Route path='/signup' element={<Signup navbar={navstate} />} >
            </Route>
            <Route path='/viewpost' element={<Viewpost/>} >
            </Route>
            <Route path='/userprofile' element={<UserProfile />} >
            </Route>
            <Route path='/explore' element={<ExplorePage />} >
            </Route>
            <Route path='/profile' element={<Profile />} >
            </Route>
            <Route path='/reels' element={<Reels />} >
            </Route>
            <Route path='/status' element={<ViewStory />} >
            </Route>
          </Routes>
        </BrowserRouter>
      </UserStatus>
    </>
);
}

export default App;
