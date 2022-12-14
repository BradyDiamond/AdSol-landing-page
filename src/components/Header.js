import 'bootstrap/dist/css/bootstrap.css'
import '../App.css';
import './Header.css';
import './Footer.css';
import skyline from "./../img/skyline.png";
import mountains from "./../img/mountains.png";
import mobile from "./../img/mobile-header.png";
import logo from "./../img/chanel-logo.png";
import './Info.css';


function Header() {
 
  return (
    <>
    <header className='desktop-header'>
      <div className='background'>
        <img  src={mountains}></img>
        <p className='product-header-text-under'></p>
      </div>
      <img src={logo}></img>
      <div className="foreground">
      <img src={skyline}></img>
      <br></br>
      <p>The New Fragrance</p>
      <p><small></small></p>
      </div>
    </header>
    <header className='mobile-header'>
      <img className="mobile-header" src={mobile}></img>  
    </header>
    </>
  )
}

export default Header