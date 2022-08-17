import 'bootstrap/dist/css/bootstrap.css'
import '../App.css';
import './Header.css';
import './Footer.css';
import skyline from "./../img/skyline.png";
import mountains from "./../img/mountains.png";
import mobile from "./../img/moble-header.png";



function Header() {
 
  return (
    <>
    <header className='desktop-header'>
      <div className='background'>
        <img  src={mountains}></img>
        <p className='product-header-text-under'></p>
      </div>
      <p className='product-header-text'>
      <span className="--i:1">A</span>
      <span className="--i:2">R</span>
      <span className="--i:3">M</span>
      <span className="--i:4">A</span>
      <span className="--i:5">N</span>
      <span className="--i:6">I</span>
      {/* <span className="--i:7">g</span> */}
      <span classNae="--i:8">.</span>
      </p>
      <img className="foreground" src={skyline}></img>
    </header>
    <header className='mobile-header'>
      <img className="mobile-header" src={mobile}></img>  
    </header>
    </>
  )
}

export default Header