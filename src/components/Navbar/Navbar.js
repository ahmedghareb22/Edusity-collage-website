import "./Navbar.css";
import logo from "../../assets/Navbar/logo.png";
import menuIcon from "../../assets/Navbar/menu-icon.png";
import { useEffect, useState } from "react";
import {Link} from 'react-scroll'

const Navbar = () => {
  const [sticky, setSticky] = useState(false)
  const [hideMenu, setHideMenu] = useState(true)

  function displaySideMenu(){
    hideMenu? setHideMenu(false): setHideMenu(true)
  }

  useEffect(()=>{
    window.onscroll = ()=>{
      if(window.scrollY > 50){
        setSticky(true)
      }else{
        setSticky(false)
      }
    }
  }, [])
  return (
    <header className="navbar" style={{background: sticky? '#03346E': null}}>
          <nav className="container">
            
              <img src={logo} alt="logo" className="logo" />
              
              <ul className={hideMenu? 'hide': ''}>
                <li>
                  <Link to="hero" smooth='true' duration={800} offset={0}>Home</Link>
                </li>
                <li>
                  <Link to="programs" smooth='true' duration={800} offset={-50}>Programs</Link>
                </li>
                <li>
                  <Link to="about" smooth='true' duration={800} offset={-182}>About us</Link>
                </li>
                <li>
                  <Link to="campus" smooth='true' duration={800} offset={-135}>Campus</Link>
                </li>
                <li>
                  <Link to="testimonials" smooth='true' duration={800} offset={-135}>Testimonials</Link>
                </li>
                <li>
                  <Link to="contact" smooth='true' duration={800} offset={-135} className="btn">Contact us</Link>
                </li>
              </ul>
              <img src={menuIcon} alt="menuIcon" className="menu-icon" onClick={displaySideMenu}/>
          </nav>
    </header>
  );
};

export default Navbar;
