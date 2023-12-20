import Home from './Components/Home';
import FooterNav from './Components/FooterNav';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExplorePage from './Components/ExporePage';
import Profile from './Components/Profile';
import Reels from './Components/Reels';
import UserProfile from './Components/UserProfile';
import UserStatus from './Components/Context/userContext/UserStatus';
import Viewpost from './Components/Viewpost';
import Status from './Components/ViewStory';
import ViewStory from './Components/ViewStory';
function App() {
  return (
    <> 
      <UserStatus>
        <BrowserRouter>
          <FooterNav></FooterNav>
          <Routes>
            <Route path='/' element={<Home />} >
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
