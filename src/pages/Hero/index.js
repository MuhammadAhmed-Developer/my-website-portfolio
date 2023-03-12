import React from 'react';
import Home from './Home';
import About from './About';
import Services from './Services';
import Certifcate from './Certifcate';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';

export default function index() {
  return (
    <>
    <Header/>
    <Home/>
    <About/>
    <Services/>
    <Certifcate/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </>
  )
}
