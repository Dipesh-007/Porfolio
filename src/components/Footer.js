import "./FooterStyles.css";

import React from "react";

const Footer = () => {
  return <div className="footer">
    <div className="icon">
      <a href="https://github.com/Dipesh-007"> <i className="fa-brands fa-github iconhover" ></i></a>
   
    </div>
   <div className="icon">
    <a href="https://www.linkedin.com/in/dipesh-singh-651b67247/"><i className="fa-brands fa-linkedin iconhover"></i></a>
    

   </div>

   <div className="icon">
   <i className="fa-solid fa-envelope iconhover"></i>
   </div>

  </div>;
};

export default Footer;
