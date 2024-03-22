import React, {useState} from 'react'
import Logo from '../assets/pizzaLogo.png'
import {Link} from "react-router-dom";
import '../Style/Navbar.css'
import TocIcon from '@mui/icons-material/Toc';

function Navbar() {
    const [openLink, setOpenLink] = useState(false);
    const toogleNavbar = () =>{
        setOpenLink(!openLink);
    }
  return (
    <div className='navbar'>
        <div className="leftSide" id={openLink ? "open" : "close"}>
           <Link to="/"><img src={Logo}/></Link>
           <div className="hiddenLinks">
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
           </div>
        </div>
        <div className="rightSide">
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <button onClick={toogleNavbar}>
            <TocIcon/>
            </button>
        </div>
      
    </div>
  )
}

export default Navbar
