import React from 'react';
import './Contact.css';
import contactImg from './images/contact.jpg'

export default function Contact() {
    return(
        <div className="contact component__space" id="Contact" style={{ padding: "6px"}}>
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="contact__text">Contact Me</h1>
                            <p className="contact__text white">
                                I am available for Internship.Contact me.
                            </p>
                            <p className="contact__text white">
                               <strong>0977-4313544</strong> or <strong>guru_dev7@hotmail.com</strong>
                            </p>
                        </div>
                        <div className="input__box">
                            <input type="text" className="contact name" placeholder="Your name *" />
                            <input type="text" className="contact email" placeholder="Your Email *" />
                            <input type="text" className="contact subject" placeholder="Write a Subject *" />
                            <textarea name="message" id="message" placeholder="Write Your message"></textarea>
                            <button className="btn contact pointer" type="submit">Submit</button>
                        </div>
                   </div>
                </div>
                <div className="col__2">
                     <img src={contactImg} alt="" className="contact__img" />
                </div>
            </div>
            
        </div>
    )
}
