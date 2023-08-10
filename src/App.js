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
import PostsPage from './component/posts-page';
import About from './component/about';
import OverView from './component/overView';
import WorkAndEducation from './component/work-and-education';
import PlacesLived from './component/places-lived';
import ContactInfo from './component/contact-info';
import Relationship from './component/relationship';
import AboutYou from './component/about-you';
import LifeEvent from './component/life-event';
import Friends from './component/friends';
import AllFriends from './component/allFriends';
import RecentlyAdded from './component/recently-added';
import Birtdays from './component/brithday';
import CurrentCity from './component/currentCity';
import HomeTown from './component/homeTown';
import Following from './component/following';
import Photos from './component/photos';
import PhotosOfYou from './component/photos-of-you';
import YourPhotos from './component/your-photos';
import Albums from './component/albums';
import Video from './component/video';
import YourVideos from './component/your-videos';
import ReelPage from './component/reel-page.';
import YourReels from './component/your-reels';
import SavedReels from './component/saved-reels';

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
                    <Route path="/accountDetails/about" element={<About />} >
                      <Route path='/accountDetails/about/addWorkPlace' element={<OverView  />} />
                      <Route path='/accountDetails/about/workAndEducation' element={<WorkAndEducation />} />
                      <Route path='/accountDetails/about/placesLived' element={<PlacesLived />} />
                      <Route path='/accountDetails/about/contactInfo' element={<ContactInfo />} />
                      <Route path='/accountDetails/about/relationship' element={<Relationship />} />
                      <Route path='/accountDetails/about/aboutYou' element={<AboutYou />} />
                      <Route path='/accountDetails/about/lifeEvent' element={<LifeEvent />} /> 
                    </Route>
                    <Route path='/accountDetails/friends' element={<Friends/> } >
                      <Route path='/accountDetails/friends/allFriends' element={<AllFriends/>} />
                      <Route path='/accountDetails/friends/recentlyAdded' element={<RecentlyAdded />} />
                      <Route path='/accountDetails/friends/brithday' element={<Birtdays />} />
                      <Route path='/accountDetails/friends/currentCity' element={<CurrentCity />} />
                      <Route path='/accountDetails/friends/homeTown' element={<HomeTown />} />
                      <Route path='/accountDetails/friends/following' element={<Following />} />
                    </Route>
                    <Route path='/accountDetails/photos' element={<Photos />} >
                      <Route path='/accountDetails/photos/photosOfYou' element={<PhotosOfYou />} />
                      <Route path='/accountDetails/photos/yourPhotos' element={<YourPhotos />} />
                      <Route path='/accountDetails/photos/albums' element={<Albums />} />
                    </Route>
                    <Route path='/accountDetails/video' element={<Video />} >
                      <Route path='/accountDetails/video/yourVideos' element={<YourVideos />} />
                    </Route>
                    <Route path='/accountDetails/reelPage' element={<ReelPage />} >
                      <Route path='/accountDetails/reelPage/yourReels' element={<YourReels />} />
                      <Route path='/accountDetails/reelPage/savedReels' element={<SavedReels />} />
                    </Route>
                </Route>
                  <Route path='/videos' element={<Videos/>} />
                  <Route path='/markerplace' element={<MarkerPlace />} />
                  <Route path='/games' element={<Games />} />
              </Routes>
          </div>
          <div className='messenger-container'>
          {/* <Video /> */}
          </div>
        </div>
    </div>
  );
}

export default App;
