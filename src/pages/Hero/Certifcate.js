import React from 'react';
import certifcate from '../../assects/images/certifcate.jpg'

export default function Certifcate() {
  return (
    <section id='certifcate'>
        <div className="container mt-5">
            <div className="row mt-3">
                <div className="col text-center mt-5 ">
                    <div className='border-bottom p-3'>
                        <h1 className='text-white'>CERTIFICATION</h1>
                    </div>
                    <div className="col text-center mt-5">
                      <img src={certifcate} alt="" className='img-fluid  certifcate'/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
