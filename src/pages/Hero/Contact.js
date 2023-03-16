import React, { useState } from 'react';
import { doc, serverTimestamp, setDoc } from "firebase/firestore/lite";
import { async } from '@firebase/util';
import { firestore } from '../../Config/Firebase';

const initialState = {
    user: '',
    email: '',
    message: ''

}

export default function Contact() {

    const [state, setState] = useState('')
    const [isProcessing, setIsProcessing] = useState(false)

    const handleChange =  (e) => {
        setState(s => ({ ...s, [e.target.name]:e.target.value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        let { user, email, message } = state

        user = user.trim()
       email = email.trim()
     message = message.trim()

        if(user.length < 3) {
            return window.notify('PLease  Enter Name', 'error')
        }
        if(email.length < 3) {
            return window.notify('PLease  Enter Email', 'error')
        }
        if(message.length < 10) {
            return window.notify('PLease  Enter Message Correctly', 'error')
        }

        let contactData = {user, email, message}

        contactData.dateCreated = serverTimestamp()
        contactData.id = Math.random().toString(36).slice(2);
        
        createContact(contactData)
    
        
        console.log(state)
      
       
    }

    const createContact = async (contactData) =>{
 
        setIsProcessing(true)

        try{
            await setDoc(doc(firestore, "ContactData", contactData.id), contactData);
            window.notify('Thanks for Contacting', 'success')
               
        }catch(err){
            console.error(err)
            window.notify('Something went Wrong', 'error')

        }

        setIsProcessing(false)
    }

    return (
        <section id='contact'>
            <div className="container ">
                <div className="row text-center">
                    <h5>How can you communicate?</h5>
                    <div className="col text-center text-white">
                        <h1>CONTACT</h1>
                    </div>
                    <div className="container px-3">

                        <form onSubmit={handleSubmit}>
                            <div className="row mt-4">
                                <div className="col-6" >
                                    <input type="text" name='user' placeholder='Enter Name' className='form-control bg-transparent text-white' onChange={handleChange} />
                                </div>
                                <div className="col-6">
                                    <input type="email" name='email' placeholder='Enter Email' className='form-control bg-transparent text-white' onChange={handleChange} />
                                </div>
                            </div>
                            <div className="row my-4">
                                <div className="col-12">
                                    <textarea name="message" rows="5" placeholder='Write Something' className='bg-transparent text-white form-control' onChange={handleChange}></textarea>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <button className='btn btn-light w-25' disabled={isProcessing}>Send <i class="mt-3 bi bi-send-fill fs-5"></i></button>
                                </div>
                            </div>
                        </form>
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
