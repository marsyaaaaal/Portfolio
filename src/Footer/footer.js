import React, { useRef } from "react";
import "./footer.css";
import emailjs from '@emailjs/browser';
import apiKey from '../emailkey';

const Footer = ()=> {
    const formRef = useRef();

        const handleSubmit = (e) => {
            e.preventDefault(); // Prevents default refresh by the browser
            emailjs.sendForm(apiKey.SERVICE_ID, apiKey.TEMPLATE_ID, formRef.current, apiKey.PUBLIC_KEY)
                .then((result) => {
                    alert("Message Sent, I will get back to you shortly, Thank you!", result.text);
                    document.getElementById("send-form").reset();
                },
                    (error) => {
                        alert("An error occurred, Please try again.", error.text);
                    
                    });
        };

        return (
            <div className="footer-bg" id="footer">

                <div className="footer">
                    <div className="contacts">
                        <div className="name-email">
                            <h1><span className="first">MARCIAL</span> <span className="last">ABASOLA</span></h1>
                            <div className="my-email">
                                <img className="email" src="email.svg" alt="email" />
                                <p>marcial.abasolajr18@gmail.com</p>
                            </div>
                        </div>
                        <div className="navs">
                            <div className="navs-list">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Portfolio</a></li>
                                <li><a href="#">Back to top</a></li>
                            </div>
                        </div>

                        <button>Download Resume</button>
                        <h1 className="conn">CONNECT WITH ME</h1>
                        <div className="socials">
                            <img src="facebook.png" alt="facebook" style={{ filter: 'invert(100%)' }} />
                            <img src="instagram.png" alt="instagram" style={{ filter: 'invert(100%)' }} />
                            <img src="linkedin.png" alt="linkedin" style={{ filter: 'invert(100%)' }} />
                            <img src="github.png" alt="github" style={{ filter: 'invert(100%)' }} />
                            <img src="twitter.png" alt="twitter" style={{ filter: 'invert(100%)' }} />

                        </div>
                    </div>
                    <div className="contact-me">
                        <form ref={formRef} onSubmit={handleSubmit} id="send-form">
                            <h1>CONTACT ME</h1>
                            <div className="email-type">
                                <span>Email:</span>
                                <input type="text" name="email" />
                            </div>
                            <div className="email-type">
                                <span>Name:</span>
                                <input type="text" name="from_name" />
                            </div>
                            <div className="email-type">
                                <span>Message:</span>
                                <textarea type="text" name="message"/>
                            </div>
                            <input className="send" value="Send" type="submit" />
                        </form>
                    </div>
                </div>
            </div>

        );
    }


export default Footer;