import React from 'react'
import './App.css'
import faicon from './fa.png'

const Contact = () => {
  return (
    <div className='skill'>
              
         
          <h1  className='head'>CONTACT ME</h1>
          <p className='descrip'>Please fill out the form below to discuss any work opertunities</p>
          <div className='d-flex flex-wrap  '>

            <div className='formdiv'>
          <form  action="">
            <input type="text" className='name' placeholder='Your Name'/><br/>
            <input  type="email" className='email 'placeholder='Email'/><br/>
            <input  type="text" className='sub 'placeholder='Subject'/><br/>
            <textarea name="message" className='msg' rows="5" placeholder='Your Message'></textarea>
            <div className="wrapper"><button type='submit' className='button' value='send'>Send</button></div>
          </form>
          </div>
    </div>
   <div className="link">
  
    <img src={faicon} alt=""  className="link" />
    <img src="" alt="" className="link" />
    <img src="" alt="" className="link" />
    <img src="" alt="" className="link" />
   </div>
    
    </div>
  )
}

export default Contact
