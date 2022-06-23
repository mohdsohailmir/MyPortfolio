import React, { useContext, useRef } from 'react'
import "./contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import emailjs from '@emailjs/browser';
import { useState } from 'react'
import { ThemeContext } from '../../context'

const Contact = () => {

        const formRef = useRef()
        const [done, setDone]= useState(false)

        const theme = useContext(ThemeContext)
        const darkMode = theme.state.darkMode;


        const handleSubmit = (e) =>{
           /*this prevents the page from refreshing on clicking submit btn*/  
           e.preventDefault()
           emailjs.sendForm('service_mfq9i6p', 'template_susq71f', formRef.current, '7eS6QyPzuDzp1OiZ6')
           .then((result) => {
               console.log(result.text);
               setDone(true)
           }, (error) => {
               console.log(error.text);
           });



        }

    return (
        <div className="c">
            <div className="c-bg"> </div>
            <div className="c-wrapper">

                <div className="c-left">
                <h1 className="c-title">Let's discuss your project</h1>
                <div className="c-info">

                    <div className="c-info-item">
                        <img src={Phone} alt="" className="c-icon" />
                        +1 1234 556 75
                    </div>

                    <div className="c-info-item">
                        <img src={Email} alt="" className="c-icon" />
                        contact@sohail.mir
                    </div>

                    <div className="c-info-item">
                        <img src={Address} alt="" className="c-icon" />
                        35 columbia street, tour de waterloo 8750 Canada
                    </div>



                </div>
                
                </div>
                   


                <div className="c-right">

                <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>

          <form ref={formRef} onSubmit={handleSubmit}>
              <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
              <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
              <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
              <textarea  rows="5" placeholder="Message" name="message"/>
              <button className="glow-on-hover">Submit</button>
             {done && "Thankyou...  "}
          </form>


                    
                </div>

            </div>
        </div>
    )
}

export default Contact
