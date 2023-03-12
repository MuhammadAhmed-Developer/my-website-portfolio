import React, { useEffect, useState } from 'react';
import myImage from '../../assects/images/my image.jpg'

export default function Home() {
     const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(250);
    // eslint-disable-next-line
    const [index, setIndex] = useState(1);
    const toRotate = ["Web Developer", "Web Designer", "React Web Application Developer", "Google Firebase"];

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
        // eslint-disable-next-line
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(200);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }
    return (
        <>
            {/* Top section */}

            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4  position-static top-0 col-md-6 col-sm-12">
                        <div className="card   text-center p-lg-5 p-md-3 p-sm-2">
                            <div className='text-center'>
                            <img src={myImage} className=" card-img-top imageMy border border-5 border-light" alt="myImage"/>

                            </div>
                                <div className="card-body">
                                    <h4 className="card-title text-white fw-bolder">Muhammad Ahmed</h4>
                                    <h6 className="card-title text-white fw-bolder mb-4">Web Application Developer</h6>                                     
                                    <a href="#home" className="mb-2  btn border border-secondary text-secondary btns">Home</a>
                                    <a href="#about" className="mb-2 btn border border-secondary text-secondary btns">About</a>
                                    <a href="#services" className="mb-2 btn  border border-secondary text-secondary btns">Services</a>
                                    {/* <a href="#certifcate" className="mb-2 certifcate btn border border-secondary text-secondary btns">Certification</a> */}
                                    <a href="#portfolio" className="mb-2 btn port border border-secondary text-secondary btns">Portfolio</a>
                                    <a href="#contact" className="mb-2 btn port border border-secondary text-secondary btns">Contact</a>
                                </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12 mt-sm-4 mt-lg-0 mt-md-0  d-flex justify-content-center align-content-center">
                      <div className='mx-5 mt-sm-4 mt-lg-0 mt-md-0  d-flex justify-content-center align-items-center flex-column'>
                        <h3 className='mt-sm-5 mt-lg-0'>Hi There!</h3>
                        <h1 className='fw-bolder text-white text-center'>I'M Muhammad Ahmed</h1>

                        <p className='header-subtitle text-center fw-bolder fs-3'> <span className="txt-rotate" dataperiod="1000" data-rotate='[ "Web Developer", "Web Designer", "React Web Application Developer" ]'><span className="wrap">{text}</span><span className='text-dark'>|</span></span></p>

                        <a href="#contact" className=" btn btn-secondary px-5 rounded-5"><i class="bi bi-download "></i> <span className='fs-5 fw-bold'>CV</span></a>
                      </div>

                    </div>
                    <div className="col-2  d-flex justify-content-center align-content-center">
                        <div className='d-flex justify-content-center align-items-center flex-column'>
                            <ul className='list'>
                                <li className='mb-2'><a href="mailto:muhammadahmedite@gmail.com" target='_blank'><i className="bi bi-envelope text-secondary fs-4"></i></a></li>

                                <li className='mb-2'><a href="" target='_blank'><i className="bi bi-linkedin text-secondary fs-4"></i></a></li>
                                <li className='mb-2'><a href="" target='_blank'><i className="bi bi-facebook text-secondary fs-4"></i></a></li>
                                <li className='mb-2'><a href="" target='_blank'><i className="bi bi-instagram text-secondary fs-4"></i></a></li>
                                <li className='mb-2'><a href="" target='_blank'><i className="bi bi-github text-secondary fs-4"></i></a></li>
                                <li className='mb-2'><a href="" target='_blank'><i className="bi bi-whatsapp text-secondary fs-4"></i></a></li>
                                <li className='mb-2'><a href="" target='_blank'><i className="bi bi-twitter text-secondary fs-4"></i></a></li>
                                <li className='mb-2'><a href="" target='_blank'><i className="bi bi-youtube text-secondary fs-4"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}
