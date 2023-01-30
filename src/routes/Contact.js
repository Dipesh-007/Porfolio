import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import contact from './contact1.jpg'
const Contact = () => {


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_aziwk98', 'template_d0jqj1g', form.current, 't0qI3WZJeuiQJFPY4')
      .then((result) => {
        window.alert("Email sent Sucessfully")
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };





  return (
    <div className="container" id='contact'>
         <div className="row">
       
       <div className="col-lg-6 col-sm-12">
       <Fade left>
      <h1 className="text-center my-5">Get in Touch</h1>
      <form className="my-5"  ref={form} onSubmit={sendEmail}>
        <div class="form-group my-3">
          {/* <label for="exampleFormControlInput1">Email address</label> */}
          <input type="text" class="form-control" name="user_name" id="exampleFormControlInput1" placeholder="Enter your Name" />
        </div>
        <div class="form-group my-3">
          {/* <label for="exampleFormControlInput1">Email address</label> */}
          <input type="email" name="user_email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your Email" />
        </div>


        <div class="form-group my-3">
          {/* <label for="exampleFormControlTextarea1">Example textarea</label> */}
          <textarea class="form-control" name="message" id="exampleFormControlTextarea1" rows="7" placeholder="Enter your Message"></textarea>
        </div>
      <div className="text-center my-5">
        <button className="btn " type="submit" value="Send">send</button>
      </div>
      </form>
      </Fade>
      </div>
      <div className="col-lg-6 col-sm-12">
      <img src={contact} className='back_class' />
      </div>
      </div>
    </div>
    )
};

export default Contact;
