import React, { useEffect, useState } from 'react'
import logo from '../../assects/images/logo.png'

export default function Header() {

    const [display, setDisplay] = useState('none')
    const [transition, setTransition] = useState('')
  
  
    const handleScroll = () =>{
      const position = window.pageYOffset;
      if(position > 500){
       setDisplay ('block')
       setTransition('2s')
      }else{
        setDisplay('none')
        
      }
    };
  
    useEffect(()=>{
      window.addEventListener('scroll', handleScroll, {position: true})
  
      return ()=>{
        window.removeEventListener('scroll', handleScroll)
      }
    }, [])


  return (
//    
<nav className="navbar navbar-expand-lg bg-light fixed-top navbar-light" style={{display: display, transition: transition}}>
  <div className="container">
    <a className="navbar-brand" href="#"><img src={logo} alt="" className='img-fluid me-1 mb-2 ' style={{width:25}} /> <span className='fw-bold text-secondary'>Muhammad Ahmed</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active me-4" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active me-4" href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active me-4" href="#services">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active me-4" href="#certifcate">Certification</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active me-4" href="#portfolio">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active me-4" href="#contact">Contact</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
  )
}
