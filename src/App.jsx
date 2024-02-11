import Home from './Components/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExplorePage from './Components/SearchPage/ExporePage';
import Profile from './Components/Profiles/Profile';
import Reels from './Components/Reels/Reels';
import UserProfile from './Components/Profiles/UserProfile';
import UserStatus from './Components/Context/userContext/UserStatus';
import Viewpost from './Components/Post/Viewpost'
import ViewStory from './Components/Story/ViewStory';
import Signin from './Components/SIgninSignup/Signin';
import Signup from './Components/SIgninSignup/Signup';
import Messages from './Components/ChatMessage/Messages';
import Chat from './Components/ChatMessage/Chat'


function App() {
  return (
    <> 
      <UserStatus>
        <BrowserRouter>
          <Routes>
            <Route path='/'   element={<Signin/>} >
            </Route>
            <Route path='/home' element={<Home/>} >
            </Route>
            <Route path='/signup' element={<Signup/>} >
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
            <Route path='/status/:username/:ival' element={<ViewStory />} >
            </Route>
            <Route path='/messages' element={<Messages/>} >
            </Route>
            <Route path='/messages/chat/:userId' element={<Chat/>} >
            </Route>
          </Routes>
        </BrowserRouter>
      </UserStatus>
    </>
);
}
export default App;
