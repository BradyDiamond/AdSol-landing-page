import 'bootstrap/dist/css/bootstrap.css'
import '../App.css';
import Footer from './Footer';
import SlideShow from './SlideShow'
function App() {
  return (
    <div className='app-wrapper'>
      <div className="content">
        <div className='slides'>
        <SlideShow />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
