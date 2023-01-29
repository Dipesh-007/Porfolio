import "./NavbarStyles.css";
import {FaBars,FaTimes} from 'react-icons/fa'
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {

  const [click,setclick]=useState(false)

  const handleclick=()=>setclick(!click)
  const [color,setColor]=useState(false)
  const changecolor =()=>{
    if(window.scrollY > 130){
      setColor(true)
    }
    else{
      setColor(false)
    }
    }

    window.addEventListener('scroll',changecolor)

const handlescrollH =()=>{
  document.getElementById('Home').scrollIntoView()
}
const handlescrollA =()=>{
  document.getElementById('about').scrollIntoView()
}
const handlescrollP =()=>{
  document.getElementById('project').scrollIntoView()
}
const handlescrollC =()=>{
  document.getElementById('contact').scrollIntoView()
}
const handlescrollS=()=>{
  document.getElementById('skills').scrollIntoView()
}



  return( <div className={color?'Navbar-bg Navbar':'Navbar'}>
       <a to='/'><h1 className="nav-brand">Portfolio</h1></a>
       <ul className={click ? "menu active": 'menu'}>
        <li  >
          <a className="item"  onClick={handlescrollH}>Home</a>
        </li>
        <li >
          <a className="item" onClick={handlescrollP}>Project</a>
        </li>
        <li  >
          <a className="item"  onClick={handlescrollA}>About</a>
        </li>
        <li  >
          <a className="item"  onClick={handlescrollC}>Contact</a>
        </li>
        <li  >
          <a className="item"  onClick={handlescrollS}>Skills</a>
        </li>
       </ul>
       <div className="hamberger" onClick={handleclick }>
        
        {click ? <FaTimes size={24} style={{color:'white'}}/>:  <FaBars  size={22} style={{color:'white'}}/>}
        

       </div>

  </div>)
};

export default Navbar;
