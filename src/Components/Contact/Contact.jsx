import React from 'react'
import './Contact.css'
import emailjs from "@emailjs/browser";
import { useRef } from 'react';
const Contact = () => {
  const form = useRef();
  e.preventDefault();

    emailjs.sendForm('service_fg0xe6k', 'template_6ghjlpa', form.current, 'TuQwn4zdEYiKcU9zi')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className="contact-form" >
         <div className="w-left">
          <div className="awesome">
          <span>Get in Touch</span>
         <span>Contact me</span>
         </div>
         
         </div>
         <div className="c-right">
           <form>
           <input type="text" name="user_name" className="user"  placeholder="Name"/>
          <input type="email" name="user_email" className="user" placeholder="Email"/>
          <textarea name="message" className="user" placeholder="Message"/>
          <input type="submit" value="Send" className="button"/>
          <span>{ "Thanks for Contacting me"}</span>
           </form>
         </div>
    </div>
  )
}

export default Contact