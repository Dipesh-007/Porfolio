// import React from "react";
import Qclust from './10.png'
import Qclust1 from './11.png'
import Qclust2 from './12.png'
import news from './13.png'
import news1 from './14.png'
import news2 from './15.png'
import daily from './16.png'
import daily1 from './17.png'
import daily2 from './19.png'
import back from './back2.jpg'




import { GrPrevious, GrNext } from 'react-icons/gr';
import React from 'react'

const Project = () => {
  return (

    <div className="mask2" id='project'>
      <img className='back_class back3 backdrop ' src={back} alt="" />
      <div className="container ">


        <div className="row">
        <h1 className='text-center my-5 heading '>Projects</h1>


          <div className="col-lg-5 my-4 main ">



            <div id="carouselExampleControls" className="carousel slide" data-interval="false" >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-100" src={Qclust} alt="First slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src={Qclust1} alt="Second slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src={Qclust2} alt="Third slide" />
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span aria-hidden="true">< GrPrevious className='icons' /></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span aria-hidden="true"><GrNext className='icons' /></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
            <div className="inner">
              <button className='btn'>Code</button>
              <button className='btn'>Live Page</button>

            </div>

          </div>


          <div className="col-lg-5  text-center my-4 main">
            <div id="carouselExampleControls1" className="carousel slide"  data-interval="false">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-100" src={news} alt="First slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src={news1} alt="Second slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src={news2} alt="Third slide" />
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleControls1" role="button" data-slide="prev">
                <span aria-hidden="true"><GrPrevious className='icons' /></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleControls1" role="button" data-slide="next">
                <span aria-hidden="true"><GrNext className='icons'/></span>
                <span className="sr-only">Next</span>
              </a>
            </div>

            <div className="inner">
              <button className='btn'>Code</button>
              <button className='btn'>Live Page</button>

            </div>
          </div>



          <div className="col-lg-5   my-4 main">
            <div id="carouselExampleControls2" className="carousel slide"  data-interval="false">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-100" src={daily} alt="First slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src={daily1} alt="Second slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src={daily2} alt="Third slide" />
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleControls2" role="button" data-slide="prev">
                <span aria-hidden="true"><GrPrevious className='icons'/></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleControls2" role="button" data-slide="next">
                <span aria-hidden="true"><GrNext className='icons'/></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
            <div className="inner">
              <button className='btn'>Code</button>
              <button className='btn'>Live Page</button>

            </div>
          </div>


        </div>
      </div>

    </div>
  )
}

export default Project;
