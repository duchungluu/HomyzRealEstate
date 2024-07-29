import React, { useState } from 'react';
import './Header.css';
import { BiMenuAltRight } from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler/build/OutsideClickHandler';
import { Link } from 'react-scroll';

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false)

  const getMenuStyles = (menuOpened) => {
    if(document.documentElement.clientWidth <= 800){
      return{right: !menuOpened && "-100%"}
    }
  }
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./logo.png" alt="logo" width={100} />

        <OutsideClickHandler
        onOutsideClick={()=>{
          setMenuOpened(false)
        }}
        >
        <div className="flexCenter h-menu"
        style={getMenuStyles(menuOpened)}>
          
          <a href="">Home</a>
          <a href=""><Link to = 'residencies' smooth={true} offset = {0} duration = {100}>Residencies</Link></a>
          <a href=""><Link to = 'value' smooth={true} offset = {0} duration = {-40}>Our Value</Link></a>
          <a href=""><Link to = 'getstarted' smooth={true} offset = {0} duration = {100}>Get Started</Link></a>
          <button className="button"><a href=""><Link to = 'contact' smooth={true} offset = {-37} duration = {100}>Contact Us</Link></a></button>
          
          
        </div>
        </OutsideClickHandler>

        <div className="menu-icon" onClick={()=>setMenuOpened((prev)=>!prev)}>
        <BiMenuAltRight size={30} />
        </div>

      </div>
    </section>
  )
}

export default Header