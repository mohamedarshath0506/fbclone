import './App.css';
import { Route, Routes } from 'react-router';
import FbHeader from './component/header/fb-header';
import Stories from './component/side-menus/home/stories/stories';
import Reels from './component/side-menus/home/reels/reels';
import Rooms from './component/side-menus/home/rooms/rooms';
import SideBarMenus from './component/side-menus/side-bar-menus';
import ReelsMenu from './component/side-menus/home/reeleMenu/reel-menu';
import AccountDetails from './component/side-menus/accound-holder/accound-details/accound-details';
import Videos from './component/videos';
import MarkerPlace from './component/marker-place';
import Games from './component/games';
import PostsPage from './component/side-menus/accound-holder/post/posts-page';
import About from './component/side-menus/accound-holder/about/about';
import OverView from './component/side-menus/accound-holder/about/overview/overView';
import WorkAndEducation from './component/side-menus/accound-holder/about/workAndEducation/work-and-education';
import PlacesLived from './component/side-menus/accound-holder/about/placesLived/places-lived';
import ContactInfo from './component/side-menus/accound-holder/about/contaceAndBasicInfo/contact-info';
import Relationship from './component/side-menus/accound-holder/about/familyAndRelationship/relationship';
import AboutYou from './component/side-menus/accound-holder/about/detalisAboutYou/about-you';
import LifeEvent from './component/side-menus/accound-holder/about/lifeEvents/life-event';
import Friends from './component/side-menus/accound-holder/friends/friends';
import AllFriends from './component/side-menus/accound-holder/friends/all-friends/allFriends';
import RecentlyAdded from './component/side-menus/accound-holder/friends/recently-added/recently-added';
import Birtdays from './component/side-menus/accound-holder/friends/birthdays/brithday';
import CurrentCity from './component/side-menus/accound-holder/friends/currentCity/currentCity';
import HomeTown from './component/side-menus/accound-holder/friends/homeTown/homeTown';
import Following from './component/side-menus/accound-holder/friends/following/following';
import Photos from './component/side-menus/accound-holder/photos-page/photos/photos';
import PhotosOfYou from './component/side-menus/accound-holder/photos-page/photos-of-your/photos-of-you';
import YourPhotos from './component/side-menus/accound-holder/photos-page/your-photos/your-photos';
import Albums from './component/side-menus/accound-holder/photos-page/albums/albums';
import Video from './component/side-menus/accound-holder/videos/video/video';
import YourVideos from './component/side-menus/accound-holder/videos/your-videos';
import ReelPage from './component/side-menus/accound-holder/reels-page/reels/reel-page.';
import YourReels from './component/side-menus/accound-holder/reels-page/your-reels/your-reels';
import SavedReels from './component/side-menus/accound-holder/reels-page/saved-reels/saved-reels';
import CheckIns from './component/side-menus/accound-holder/more/checkIns';

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
                </Route>rooms
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
                    <Route path='/accountDetails/checkIns' element={<CheckIns />} >

                    </Route>
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
