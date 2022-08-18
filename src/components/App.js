import 'bootstrap/dist/css/bootstrap.css'
import '../App.css';
import './Header.css';
import './Footer.css';
import './Info.css';
import './SlideShow.css'
import Footer from './Footer';
import SlideShow from './SlideShow'
import Header from './Header.js';
import Info from './Info';
import skyline from "./../img/skyline.png";
import mountains from "./../img/mountains.png";
import VideoPanel from './InfoPanel';
import InfoPanel from './InfoPanel';



function App() {
 
  return (
    <div className='app-wrapper'>
      <div className="nav-header">
      </div>
        <div className='wrapper'>
          <Header />          
          <div className='info-body'>
          <Info />
            <div className='slides'>
              <SlideShow />
            </div>
            <VideoPanel />
          </div>
        </div>
        <div className='footer'>
          <Footer />
        </div>     
      </div>
  );
}


export default App;
