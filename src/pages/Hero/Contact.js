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
                <div className="container px-5">

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
                    <div className="col">
                        <button className='btn btn-light w-25'>Send &nbsp; <i class="mt-3 bi bi-send-fill fs-5"></i></button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}
