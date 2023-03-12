import React, { useEffect, useState } from 'react'
import logo from '../../assects/images/logo.png'

export default function Header() {

    const [display, setDisplay] = useState('')
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
//     <div>

// <nav className="navbar bg-light navbar-light fixed-top" >
//   <div className="container">
//     <a className="navbar-brand" href="#"></a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
//       <div className="offcanvas-header">
//         <h5 className="offcanvas-title" id="offcanvasNavbarLabel"><img src={logo} alt="" className='img-fluid me-1 mb-2 ' style={{width:25}} /> Muhammad Ahmed</h5>
//         <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//       </div>
//       <div className="offcanvas-body text-center">
//         <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
//           <li className="nav-item">
//             <a className="nav-link active" aria-current="page" href="#home" data-bs-dismiss="offcanvas">Home</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link active" aria-current="page" href="#about" data-bs-dismiss="offcanvas">About</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#services" data-bs-dismiss="offcanvas">Services</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#certifcate" data-bs-dismiss="offcanvas">Certification</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#portfolio" data-bs-dismiss="offcanvas">Portfolio</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#contact" data-bs-dismiss="offcanvas">Contact</a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   </div>
// </nav>

//     </div>
<nav class="navbar navbar-expand-lg bg-light fixed-top navbar-light" style={{display: display, transition: transition}}>
  <div class="container">
    <a class="navbar-brand" href="#"><img src={logo} alt="" className='img-fluid me-1 mb-2 ' style={{width:25}} /> <span className='fw-bold text-secondary'>Muhammad Ahmed</span></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active me-4" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active me-4" href="#about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active me-4" href="#services">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active me-4" href="#certifcate">Certification</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active me-4" href="#portfolio">Portfolio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active me-4" href="#contact">Contact</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
  )
}
