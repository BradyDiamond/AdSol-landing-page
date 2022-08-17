import 'bootstrap/dist/css/bootstrap.css'
import '../App.css';
import './Header.css';
import './Footer.css';
import Footer from './Footer';
import SlideShow from './SlideShow'
import Header from './Header.js';
import Info from './Info';
import skyline from "./../img/skyline.png";
import mountains from "./../img/mountains.png";
import InfoPanel from './InfoPanel';



function App() {
 
  return (
    <div className='app-wrapper'>
      <div className="nav-header">
      </div>
        <div className='wrapper'>
          <header>
            <img className="background" src={mountains}></img>
            <p>test text</p>
            <img className="foreground" src={skyline}></img>
          </header>
          
          <div className='info-body'>
          <Info />
            <div className='slides'>
              <SlideShow />
            </div>
            <InfoPanel />
          </div>
        </div>
        <div className='footer'>
          <Footer />
        </div>
     
      </div>
  );
}


export default App;
