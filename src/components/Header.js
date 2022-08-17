import 'bootstrap/dist/css/bootstrap.css'
import '../App.css';
import './Header.css';
import './Footer.css';
import skyline from "./../img/skyline.png";
import mountains from "./../img/mountains.png";



function Header() {
 
  return (
    <header>
      <div className='background'>
      <img  src={mountains}></img>
      <p className='product-header-text-under'></p>
      </div>
      <p className='product-header-text'>test text</p>
      <img className="foreground" src={skyline}></img>
    </header>
  )
}

export default Header