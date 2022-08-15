import 'bootstrap/dist/css/bootstrap.css'
import '../App.css';
import Footer from './Footer';
import SlideShow from './SlideShow'
import Header from './Header.js';
import Info from './Info';


function App() {
  return (
    <div className='app-wrapper'>
      <div className="header">
        <Header />
      </div>
      <div className="content">
        <div className='slides'>
          <SlideShow />
        </div>
        <div className='info-form'>
          <Info />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
