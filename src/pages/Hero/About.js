import React from 'react';
import aboutimg from '../../assects/images/about.jpg'

export default function About() {
  return (
    <>
        <section id='about'>
          <div className="container mt-5 text-center">
            <div className="row">
              <div className=" col-lg-12 col-md-12 col-sm-12 text-center">
                 <h1 className='border-bottom py-3'><span className='text-white fw-bold text-center '>About</span> Me</h1>
                
                <p>Who Am I ?</p>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 text-center">
                <img src={aboutimg} alt="about" className='img-fluid rounded-5 w-75 myimage' />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 m-sm-3 mx-lg-0 mx-sm-5 m-lg-0 text-start text-white mt-4">
                <strong>Phone: </strong><a href="tel:03190230242" className=' text-decoration-none text-secondary'>+92 3190230242</a><br/>
                <strong>Email: </strong><a href="mailto:muhammadahmedite@gmail.com" className='text-decoration-none text-secondary'> muhammadahmedite@gmail.com</a><br/>
                <strong>Address: </strong><a href="" className='text-decoration-none text-secondary'>Faisalabad, Punjab, Pakistan. 3800 </a>
                
                <br/>
                <br/>
                <p>I’m a Web developer adept at contributing to highly collaborative work environment and finding solutions. Proven experience developing consumer-focused websites using HTML, CSS, ReactJS, JavaScript and GoogleFirebase. Good knowledge of the best practices for web design, user experience, and speed.</p>
                <br/>
                <h2>Skills</h2>
                <div className='d-flex gap-lg-5'>
                  
                <ul>
                  <li className='text-secondary'>HTML5</li>
                 <li className='text-secondary'>CSS</li>
                 <li className='text-secondary'>SCSS</li>
                 <li className='text-secondary'>JavaScript (EC6+)</li>
                 <li className='text-secondary'>React js</li>
                 
                </ul>
                <ul>
                <li className='text-secondary'>Google Firebase</li>
                  <li className='text-secondary'>Firebase Storage</li>
                 <li className='text-secondary'>Github</li>
                 <li className='text-secondary'>Microsoft Word</li>
                 <li className='text-secondary'>Microsoft PowerPoint</li>
                </ul>
                  
                </div>
              </div>
            </div>

          </div>
        </section>
    </>
  )
}
