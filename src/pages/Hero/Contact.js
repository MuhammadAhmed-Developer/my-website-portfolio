import React from 'react'

export default function Contact() {
  return (
    <section id='contact'>
        <div className="container ">
            <div className="row text-center">
                <h5>How can you communicate?</h5>
                <div className="col text-center text-white">
                    <h1>CONTACT</h1>
                </div>
                <div className="container px-3">

                <div className="row mt-4">
                    <div className="col-6">
                        <input type="text" placeholder='Enter Name' className='form-control bg-transparent text-white' />
                    </div>
                    <div className="col-6">
                        <input type="email" placeholder='Enter Email' className='form-control bg-transparent text-white' />
                    </div>
                </div>
                <div className="row my-4">
                    <div className="col-12">
                        <textarea name="" id=""  rows="5" placeholder='Write Something' className='bg-transparent text-white form-control'></textarea>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <button className='btn btn-light w-25'>Send <i class="mt-3 bi bi-send-fill fs-5"></i></button>
                    </div>
                </div>
                <div className="row mt-4 ">
                    <div className="col ">
                    <ul className='d-flex gap-lg-5 gap-sm-3 justify-content-center listsm'>
                                <li className='m-2'><a href="mailto:muhammadahmedite@gmail.com" target='_blank'><i className="bi bi-envelope text-secondary fs-4"></i></a></li>

                                <li className='m-2'><a href="https://www.linkedin.com/in/muhammad-ahmed-731234266/" target='_blank'><i className="bi bi-linkedin text-secondary fs-4"></i></a></li>
                                <li className='m-2'><a href="https://www.facebook.com/MuhammadAhmedjee" target='_blank'><i className="bi bi-facebook text-secondary fs-4"></i></a></li>
                                <li className='m-2'><a href="https://www.instagram.com/muhammad_ahmed0011/" target='_blank'><i className="bi bi-instagram text-secondary fs-4"></i></a></li>
                                <li className='m-2'><a href="https://github.com/MuhammadAhmed-Developer" target='_blank'><i className="bi bi-github text-secondary fs-4"></i></a></li>
                                <li className='m-2'><a href="https://api.whatsapp.com/send/?phone=923190230242&text&type=phone_number&app_absent=0" target='_blank'><i className="bi bi-whatsapp text-secondary fs-4"></i></a></li>
                                <li className='m-2'><a href="https://twitter.com/Muhammad__1122" target='_blank'><i className="bi bi-twitter text-secondary fs-4"></i></a></li>
                                <li className='m-2'><a href="https://www.youtube.com/channel/UCaLHw5befr8haWH_XQQVOvA" target='_blank'><i className="bi bi-youtube text-secondary fs-4"></i></a></li>
                            </ul>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}
