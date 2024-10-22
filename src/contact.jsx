import React from 'react'
import Background from '/image.png'
import mail from '/mail.png'
import call from '/call.png'
import { Link } from 'react-router-dom'
import './contact.css'

 function Contact() {
  return (
    <>
    <div className="contact-header p-5">
        <h1 className='text-4xl text-white text-center sm:text-3xl'>Contact Us</h1>
        <div className="underline"></div>
        <p className='text-white text-center  sm:text-sm'>Thank you for considering Fordest technologies. We value your  interest and look forward to  assisting you. There are several ways to  get in touch with us.</p>
    </div>
    <div className="contact-body flex gap-5 justify-between p-10 flex-wrap 2lg:p-6 sm:p-4" >
        <div className="contact-body-left w-50 lg:w-2/4 md:w-full">
            <p className='text-blue-500'>Get in Touch</p>
            <h1 className='font-bold text-4xl text-blue-900 lg:w-100 lg:text-3xl'  >Have a question or feedback?</h1>
            <div className="underline2"></div>
            <p className='text-sm '>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit </p>
        </div>
        <div className="contact-body-right border-2 border-solid border-gray-200 rounded-md px-10 py-12 md:w-full">
            <div className="form">
            <p className='font-bold' >Contact Us</p>
            <h2 className='text-blue-700 font-bold text-4xl xl:text-2xl'>Send Us A Message</h2>
            <form action="" className='flex flex-col gap-2'>
             <label htmlFor="name" className='text-sm '>Name</label>
             <input type="text" id='name'  className=' p-2 border-2  border-solid border-gray-200 rounded-md  h-10 outline-blue-600  xl:w-64 md:w-full'/>
             <label htmlFor="email" className='text-sm'>Email</label>
             <input type="email" id='email' className=' p-2 border-2  border-solid border-gray-200 rounded-md  h-10 outline-blue-600 xl:w-64 md:w-full'/>
             <label htmlFor="number" className='text-sm'>Phone Number</label>
             <input type="text" id='number' className=' p-2 border-2  border-solid border-gray-200 rounded-md  h-10 outline-blue-600 xl:w-64 md:w-full'/>
             <label htmlFor="message" className='text-sm'>Message</label>
             <textarea name="" id="message" className=' p-2 border-2  border-solid border-gray-200 rounded-md h-20 outline-blue-600 xl:w-64 md:w-full'></textarea>
             <input type="submit" name="" id=""className='border-2  border-solid border-green rounded-md  h-10 bg-green-600 text-white xl:w-64 md:w-full font-bold transition:100 cursor:pointer hover:bg-white hover:text-green-600 hover:border-2 hover:border-solid hover:border-green-600 '/>
            </form>
        </div>    
        </div>        
    </div>
    <div className="contact-info p-12 grid grid-cols-2 justify-between gap-10 sm:grid-cols-1 2lg:p-6 sm:p-4" >
      <div className="caard1 grid gap-1">
      <h2 className='text-blue-800 font-bold text-xl '>General Inquiries:</h2>
        <p className='text-sm'>For general inquiries or information about our services, please feel  free to contact us via email or phone.</p>
     <div className="contact-detail flex gap-2">
     <img src={mail} alt="" /> <p className='text-sm'> info@fordestech.com</p>
     </div>
        <div className="contact-detail flex gap-2">
        <img src={call} alt="" /> <p className='text-sm'>+2348127874913</p>
        </div>
      </div>
      <div className="card2">
        <h2 className='text-blue-800 font-bold text-xl '>Sales And partnership:</h2>
        <p className='text-sm'>If you have specific questions regarding our services, partnership  opportunities, or would like to discuss a potential project, our sales  team is ready to assist you.</p>
        <div className="contact-detail flex gap-2">
        <img src={mail} alt="" /> <p className='text-sm'>sales@fordestech.com</p>
        </div>
        </div>
      <div className="card3">
        <h2 className='text-blue-800 font-bold text-xl '>Visit Our Office:</h2>
        <p className='text-sm'>If you prefer face-to-face communication, you are welcome to visit our  office during business hours.</p>
        <div className="address flex gap-2">
            <p className='text-sm'>Address:</p>
            <div className="address-info">
                <p className='text-sm'>Fordest Techoloy <br /> 30 liasu road Ikotun <br /> lagos state, NIgeria</p>
            </div>
        </div>
      </div>
      <div className="crd4">
        <h2 className='text-blue-800 font-bold text-xl '>Business Hours:</h2>
        <p className='text-sm'>Monday- Friday: 9:00 AM to 5:00 PM</p>
        <p className='text-sm'>We're Here to Help: <br /> Whether you have a question about our services, want to explore  partnership opportunities, or need assistance with an existing project,  we're here to help. Please don't hesitate to reach out using the contact  information provided above. We strive to respond to all inquiries  promptly.</p>
        <p className='text-sm'>Thank you for choosing Fordest technologies. We look forward to  hearing from you!</p>
      </div>
    </div>
    </>
  )
}

export default Contact;
