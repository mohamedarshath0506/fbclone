import logo from './logo.svg';
import './App.css';
import FbHeader from './component/fb-header';
import Menus from './component/menus';
import Stories from './component/stories';
import Reels from './component/reels';
import Rooms from './component/rooms';
import { Route, Routes } from 'react-router';
import Page from './component/page';
import SideBarMenus from './component/side-bar-menus';
import ReelsMenu from './component/reel-menu';
import YourMind from './component/your-mind';
import AccountDetails from './component/accound-details';
import Videos from './component/videos';
import MarkerPlace from './component/marker-place';
import Games from './component/games';

function App() {
  return (
    <div className="App">
      <FbHeader />
        <div className='section-container'>
          <div className='sideMenu'>
            <SideBarMenus />
          </div>

          <div className='reelsMenu'>
            {/* <ReelsMenu /> */}
            <Routes>
            {/* <Route path='/' element={<ReelsMenu />} /> */}
            
              <Route path='/stories' element={<ReelsMenu />}>
              
                <Route path='/stories/stories' element={<Stories />} /> 
                <Route path='/stories/reels' element={<Reels />} />
                <Route path='/stories/rooms' element={<Rooms/>} />
                
              </Route>
              {/* <Route path='/accountDetails' element={<AccountDetails/>} /> */}
            </Routes>
            {/* <YourMind />
            <Page /> */}
         <div className='reelsMenus'>
          <Routes>
            <Route path='/accountDetails' element={<AccountDetails/>} />
            <Route path='/videos' element={<Videos/>} />
            <Route path='/markerplace' element={<MarkerPlace />} />
            <Route path='/games' element={<Games />} />
          </Routes>
      </div>
          </div>
        </div>
      
    </div>
  );
}

export default App;
