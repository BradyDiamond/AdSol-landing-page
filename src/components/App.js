import 'bootstrap/dist/css/bootstrap.css'
import '../App.css';
import Footer from './Footer';
import SlideShow from './SlideShow'
import Header from './Header.js';
import Info from './Info';
import skyline from "./../img/skyline.png";
import mountains from "./../img/mountains.png";
import Form from './Form';



function App() {
 
  return (
    <div className='app-wrapper'>
      <div className="nav-header">
        <Header />
      </div>
        <div className='wrapper'>
          <header>
            <img className="background" src={mountains}></img>
            <img className="foreground" src={skyline}></img>
          </header>
          
          <div className='info-body'>
            <Info />
            <div className='slides'>
              <SlideShow />
            </div>
          </div>
        </div>
        <div className='footer'>
          <Footer />
        </div>
     
      </div>
  );
}


export default App;
