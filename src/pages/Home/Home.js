import React from 'react';
import myImage from '../../assects/images/my image.jpg'

export default function Home() {
    return (
        <>
            {/* Top section */}

            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="card bg-secondary text-center p-lg-5 p-md-3 p-sm-2">
                            <div className='text-center'>
                            <img src={myImage} className="card-img-top imageMy border border-5 border-light w-75" alt="myImage"/>

                            </div>
                                <div className="card-body">
                                    <h3 className="card-title text-white fw-bolder">Muhammad Ahmed</h3>
                                    <h6 className="card-title text-white fw-bolder">Web Application Developer</h6>
                                    
                                    {/* <p class="header-subtitle"> <span class="txt-rotate" dataperiod="1000" data-rotate="[ &quot;Web Developer&quot;, &quot;Web Designer&quot;, &quot;Google Firebase Professional&quot; ]"><span class="wrap">Web Develo</span><span class="text-dark">|</span></span></p> */}
                                    
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
