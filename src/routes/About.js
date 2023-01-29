import React from "react";
import about from "../components/nomad-amico.png"
import Zoom from 'react-reveal/Zoom';
import LightSpeed from 'react-reveal/LightSpeed';
const About = () => {
  return <div>

    <div className="container" id='about'>
      <div className="row">
       
          <div className="col-lg-6 col-sm-12">

          <LightSpeed left>
              <div className="heading">

                <h1 className="text-center">About Me</h1>
              </div>
              <hr />
              <p>Ambitious full-stack developer, a self-led learner and team player
                with one year of experience in web developement.</p>

              <p>Currently looking for new opportunities in industry and willing
                to work on challenging and diverse projects with the latest technologies.</p>

              <p> Previously worked as Full stack web developer.
                The technology I've worked on : Asp.Net Core, Asp.Net Mvc,
                C#, Sql, Ssms, Telerik-UI, Html, Css, Js, Bootstrap

                Currently Learning React Js Library</p>
                <div className="parent">
                  <div className="children">
                  <div className="child" >
                    <span className="span-item">Name : </span>
                    <span className="span-item">Dipesh Singh</span>
                  </div>
                  <div className="child">
                    <span className="span-item">Email : </span>
                    <span className="span-item">001singhdipesh@gmail.com</span>
                  </div>
                  
                  <div className="child">
                    <span className="span-item">Address : </span>
                    <span className="span-item">IIITDM Jabalpur</span>
                  </div>
                  </div>
                
            </div>
            <button className="btn my-5">Resume</button>
            </LightSpeed>
          </div>
          
          <div className="col-lg-6 col-sm-12 ">
            <Zoom top>
              <img className="back_class" src={about} />
            </Zoom>
          </div>
      </div>
    </div>

  </div>;
};

export default About;
