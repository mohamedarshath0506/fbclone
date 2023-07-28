import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import FbHeader from './component/fb-header';
import Stories from './component/stories';
import Reels from './component/reels';
import Rooms from './component/rooms';
import SideBarMenus from './component/side-bar-menus';
import ReelsMenu from './component/reel-menu';
import AccountDetails from './component/accound-details';
import Videos from './component/videos';
import MarkerPlace from './component/marker-place';
import Games from './component/games';
import Messenger from './component/messenger';
import MyAccount from './component/my-account';
import Home from './component/home';
import PostsPage from './component/posts-page';
import About from './component/about';
import OverView from './component/overView';


function App() {
  return (
    <div className="App">
      <FbHeader />
        <div className='section-container'>
          <div className='sideMenu'>
            <SideBarMenus />
          </div>
          <div className='reelsMenu'>
            <Routes>
              <Route path='/stories' element={<ReelsMenu />}>
                <Route path='/stories/stories' element={<Stories />} /> 
                <Route path='/stories/reels' element={<Reels />} />
                <Route path='/stories/rooms' element={<Rooms/>} />
              </Route>
              <Route path='/accountDetails' element={<AccountDetails />} >
                <Route path='/accountDetails/postPage' element={<PostsPage />} />
                  <Route path="/accountDetails/about" element={<About />} />
                    {/* <Route path='/accountDetails/about/addWorkPlace' element={<OverView  />} /> */}
                  </Route>
             
                <Route path='/videos' element={<Videos/>} />
                <Route path='/markerplace' element={<MarkerPlace />} />
                <Route path='/games' element={<Games />} />


             </Routes>
          </div>
          <div className='messenger-container'>
          </div>
        </div>
    </div>
  );
}

export default App;
