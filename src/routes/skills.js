import React from 'react'
import skill from '../components/Development-pana.png'
import { SiJavascript, SiNodedotjs, SiReact, SiHtml5, SiCss3, SiBootstrap,  SiMongodb, SiExpress, SiPug } from 'react-icons/si'

export default function Skills() {
    return (
        <div className="upper2">
            <div className="container ">
                <div className="row">


                    <div className="col-lg-6 col-sm-12">

                        <img src={skill} className='back_class' />

                    </div>

                    <div className="col-lg-6 col-sm-12">

                        <h1 className='heading' style={{ color: 'white' }}>Technologies I know</h1>
                        <hr className='hr' />


                        <div className="row my-2 text-center">

                            <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                <span><SiJavascript className='fs-4 icon2' /> <span className='icon2' > Javascript </span></span>
                            </div>
                           
                            <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                <span><SiNodedotjs className='fs-4 icon2' /> <span className='icon2' > Node.js </span></span>
                            </div>
                            
                            <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                <span><SiReact className='fs-4 icon2' /> <span className='icon2' > React </span></span>
                            </div>
                            <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                <span><SiHtml5 className='fs-4 icon2' /> <span className='icon2' > Html5 </span></span>
                            </div>
                            <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                <span><SiCss3 className='fs-4 icon2' /><span  className='icon2'> CSS </span></span>
                            </div>
                            <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                <span><SiBootstrap className='fs-4 icon2' />  <span className='icon2' > Bootstrap </span></span>
                            </div>
                            
                            <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                <span><SiMongodb className='fs-4 icon2' /><span  className='icon2'> MongoDB </span></span>
                            </div>
                            <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                <span><SiExpress className='fs-4 icon2' /> <span className='icon2' > Express </span></span>
                            </div>
                            <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                <span><SiPug className='fs-4 icon2'  /> <spa className='icon2'n > Pug </spa></span>
                            </div>

                        </div>


                    </div>



                </div>
            </div>
        </div>
    )
}
