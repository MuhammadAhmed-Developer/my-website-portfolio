import React from 'react';



export default function Services() {
  return (
    <section id='services'>
        <div className="container mt-5 ">
            <div className="row">
                <div className="col text-center border-bottom p-3">
                    <h1 className='fw-bold text-white'>Services</h1>
                </div>
                <p className='text-center mt-1'>What I Do ?</p>
            </div>
            <div className="row mt-5 ">
                <div className="col-lg-3 col-md-6 col-sm-12 ">
                    <div className=" m-2 card bg-transparent border text-center p-lg-3 p-sm-3">
                        <div className='text-secondary'>
                        <i class="bi bi-chat-right-quote" style={{fontSize:70}}></i>
                             <h5 className='text-white'>CONSULTATION</h5>
                             <p className='text-card'>Contact me for a free consultation to start your IT business or if you need any help regarding software solutions. Feel free to contact me</p>
                        </div>
                    </div>
                </div>


                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="card m-2 bg-transparent border text-center p-lg-3 p-sm-3">
                        <div className='text-secondary'>
                        <i class="bi bi-laptop" style={{fontSize:70}}></i>
                             <h5 className='text-white'>Web design</h5>
                             <p className='text-card'>I've worked on numerous web applications in the last 1 years. I've worked on React, Bootstrap, Firebase and many more</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="card m-2 bg-transparent border text-center p-lg-3 p-sm-3">
                        <div className='text-secondary'>
                        <i class="bi bi-brush" style={{fontSize:70}}></i>
                             <h5 className='text-white'>RESPONSIVE DESIGN</h5>
                             <p className='text-card'>I design responsive websites that adapt to the size of mobile, tablet or desktop a user is using to view it</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="card m-2 bg-transparent border text-center p-lg-3 p-sm-3">
                        <div className='text-secondary'>
                        <i class="bi bi-code-slash" style={{fontSize:70}}></i>
                             <h5 className='text-white'>WEB DEVELOPMENT</h5>
                             <p className='text-card'>My commitment is to provide very contemporary solutions to website development. So if you need a perfect team, give me a call.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
