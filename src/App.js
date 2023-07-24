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

function App() {
  return (
    <div className="App">
      <FbHeader />
      <div className='sideMenu'>
        <SideBarMenus />
      </div>
      <div className='reelsMenu'>
        <ReelsMenu />
        <Stories />
        <YourMind />
        <Page />
        {/* <Routes>
          <Route path='/' element={<ReelsMenu />}>
            <Route path='/stories' element={<Stories />} />
            <Route path='/reels' element={<Reels />} />
            <Route path='/rooms' element={<Rooms />} />
          </Route>
        </Routes> */}
      </div>
      {/* <Menus /> */}
      {/* <Stories />
      <Reels />
      <Rooms /> */}
      
      {/* <Routes>
        <Route path='/' element={<Menus />}>
          <Route path="/home/stories" element={<Stories />} />
          <Route path='/home/reels' element={<Reels />} />
          <Route path="/home/rooms" element={<Rooms />} />
        </Route>
      </Routes> */}
     {/* <Page /> */}
    </div>
  );
}

export default App;
