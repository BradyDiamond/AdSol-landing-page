import 'bootstrap/dist/css/bootstrap.css'
import '../App.css';
import Footer from './Footer';
import SlideShow from './SlideShow'
import Header from './Header.js';
import Info from './Info';
import skyline from "./../img/skyline.png";
import mountains from "./../img/mountains.png";



function App() {
  return (
    <div className='app-wrapper'>
      <div className="header">
        <Header />
        </div>
        <div className='wrapper'>
        
        <img className="background" src={mountains}></img>
          <img className="foreground" src={skyline}></img>
        </div>
      <div className="content">
        <div className='slides'>
          <div className='col-6'>
            {/* <SlideShow /> */}
          </div>
          <div className='col-6'>
            {/* <Info/> */}
          </div>
        </div>
        <div className='slides'>
          <div className='col-12'>
            {/* <Info/> */}
          </div>
        </div>
        
        
      </div>
      <Footer />
    </div>
  );
}

export default App;
