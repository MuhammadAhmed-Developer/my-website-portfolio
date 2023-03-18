import React from 'react';
import hotel from '../../assects/images/prot 1.png';
import boot from '../../assects/images/Boootcapm.png';
import agency from '../../assects/images/egency.png';
import cal from '../../assects/images/calculater.png';
import todo from '../../assects/images/todo.png';
import event from '../../assects/images/events.jpg'
export default function Portfolio() {
    return (
        <section id='portfolio'>
            <div className="container mt-5">
                <div className="row">
                    <div className="col text-center mt-3">
                        <h1 className='text-white border-bottom p-3'>
                            PORTFOLIO
                        </h1>
                    </div>
                    <div className="row mt-4">
                        <div className="col-lg-4 col-sm-12  col-md-6 text-center my-4">
                            <div className="card border p-lg-0 p-sm-2" id='cardpo'>
                                <div className="inner">

                               <img src={hotel} alt="" className='image-fluid w-100'/>
                                </div>
                               <div className='text-center p-lg-4 p-md-3 p-sm-3 border'>
                               <h5 className="card-title text-center text-white fw-bold my-2">RESTAURANT</h5>
                               <p className="text-center card-text text-start text-white">A website build on HTML5, CSS3, Bootstrap5</p>
                               <a href="http://myhotel.surge.sh/#" target='_blank' className=" my-3 btn btn-light w-50"><i className='bi bi-laptop'></i> Live Demo</a>
                               </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12  col-md-6 text-center my-4">
                            <div className="card border p-lg-0 p-sm-2" id='cardpo  card-transtion'>
                                <div className="inner">

                               <img src={agency} alt="" className='image-fluid w-100'/>
                                </div>
                               <div className='text-center p-lg-4 p-md-3 p-sm-3 border'>
                               <h5 className="card-title text-center text-white fw-bold my-2">State Agency</h5>
                               <p className="text-center card-text text-start text-white">A website build on HTML5, CSS3, Bootstrap5</p>
                               <a href="http://dreamhouses.surge.sh/#" target='_blank' className=" my-3 btn btn-light w-50"><i className='bi bi-laptop'></i> Live Demo</a>
                               </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12  col-md-6 text-center my-4">
                            <div className="card border p-lg-0 p-sm-2" id='cardpo'>
                                <div className="inner">

                               <img src={boot} alt="" className='image-fluid w-100'/>
                                </div>
                               <div className='text-center p-lg-4 p-md-3 p-sm-3 border'>
                               <h5 className="card-title text-center text-white fw-bold my-2">BootCamp</h5>
                               <p className="text-center card-text text-start text-white">A website build on HTML5, CSS3, Bootstrap5</p>
                               <a href="http://completeboot.surge.sh/#" target='_blank' className=" my-3 btn btn-light w-50"><i className='bi bi-laptop'></i> Live Demo</a>
                               </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12  col-md-6 text-center my-4">
                            <div className="card border p-lg-0 p-sm-2" id='cardpo'>
                                <div className="inner">

                               <img src={cal} alt="" className='image-fluid w-100'/>
                                </div>
                               <div className='text-center p-lg-4 p-md-3 p-sm-3 border'>
                               <h5 className="card-title text-center text-white fw-bold my-2">Calculater</h5>
                               <p className="text-center card-text text-start text-white">A website build on HTML5, CSS3, Bootstrap5, JavaScript</p>
                               <a href="http://mycalculater.surge.sh/#" target='_blank' className=" my-3 btn btn-light w-50"><i className='bi bi-laptop'></i> Live Demo</a>
                               </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12  col-md-6 text-center my-4">
                            <div className="card border p-lg-0 p-sm-2" id='cardpo'>
                                <div className="inner">

                               <img src={todo} alt="" className='image-fluid w-100'/>
                                </div>
                               <div className='text-center p-lg-4 p-md-3 p-sm-3 border'>
                               <h5 className="card-title text-center text-white fw-bold my-2">Todo App</h5>
                               <p className="text-center card-text text-start text-white">A website build on React Js and<br/> Firebase</p>
                               <a href="https://my-todo-app-00.web.app/" target='_blank' className=" my-3 btn btn-light w-50"><i className='bi bi-laptop'></i> Live Demo</a>
                               </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12  col-md-6 text-center my-4">
                            <div className="card border p-lg-0 p-sm-2" id='cardpo'>
                                <div className="inner">

                               <img src={event} alt="" className='image-fluid w-100'/>
                                </div>
                               <div className='text-center p-lg-4 p-md-3 p-sm-3 border'>
                               <h5 className="card-title text-center text-white fw-bold my-2">Events Planner</h5>
                               <p className="text-center card-text text-start text-white">A website build on React Js and<br/> Firebase</p>
                               <a href="https://events-net.web.app/" target='_blank' className=" my-3 btn btn-light w-50"><i className='bi bi-laptop'></i> Live Demo</a>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
        </section>
    )
}
