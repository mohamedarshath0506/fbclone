import { Route, Routes } from 'react-router';
import ReelsMenu from './reel-menu';
import Stories from './stories';
import Reels from './reels';
import Rooms from './rooms';
import AccountDetails from './accound-details';
import Videos from './videos';
import MarkerPlace from './marker-place';
import Games from './games';
import SideBarMenus from './side-bar-menus';

function Home() {
    return (
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
                  <Route path='/accountDetails' element={<AccountDetails/>} />
                  <Route path='/videos' element={<Videos/>} />
                  <Route path='/markerplace' element={<MarkerPlace />} />
                  <Route path='/games' element={<Games />} />
              </Routes>
          </div>
        </div>
    )
}

export default Home