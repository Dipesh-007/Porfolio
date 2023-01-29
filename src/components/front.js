import "./front.css";
import back from './back.jpg'
import React from "react";
import { Link } from "react-router-dom";
import LightSpeed from 'react-reveal/LightSpeed';
import Roll from 'react-reveal/Roll';
import Typical from 'react-typical'
// import Footer from "./Footer";

const Front = () => {
  return( 
  <div className="upper" id="Home">

      <div className="mask">
        <img className="back_class" src={back} />
      </div>
      <div className="content">
      <Roll left>
        <h1 className="name">Hi, I'm Dipesh Singh </h1>
        <p >I'm a <Typical
            loop={Infinity}
            wrapper="b"
            steps={[
              'Web developer',
              2000,
              'MERN developer',
              2000,
            ]}
            />
          
           {/* <Typical
        steps={['Hello', 1000, 'Hello world!', 500]}
        loop={Infinity}
        wrapper="p"
      /> */}
          </p>
        <div className="link">
        <Link to='/project' className="btn mx-2 my-2">PROJECTS</Link>
        <Link to='/project' className="btn my-2">CONTACT</Link>
        </div>
        </Roll>
      </div>


      {/* <Footer/> */}
    


  </div>)
};

export default Front;
