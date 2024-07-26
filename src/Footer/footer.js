import React, { useRef } from "react";
import "./footer.css";
import emailjs from '@emailjs/browser';
import apiKey from '../emailkey';
import { Link, animateScroll as scroll } from "react-scroll";

const Footer = () => {
    const formRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents default refresh by the browser
        emailjs.sendForm(apiKey.SERVICE_ID, apiKey.TEMPLATE_ID, formRef.current, apiKey.PUBLIC_KEY)
            .then((result) => {
                alert("Message Sent, I will get back to you shortly, Thank you!", result.text);
                document.getElementById("send-form").reset();
            },
                (error) => {
                    console.log(error)
                    alert("An error occurred, Please try again.", error.text);

                });
    };

    const actionToOpen = (data) => {
        if (data === 0) {
            window.open('https://www.linkedin.com/in/marcial-abasola-a9498b210/', '_blank').focus()
        }
        else if (data === 1) {
            window.open('https://www.facebook.com/profile.php?id=100002844207547', '_blank').focus()
        }
        else if (data === 2) {
            window.open('https://www.github.com/marsyaaaaal', '_blank').focus();
        }
        else if (data === 3) {
            window.open('https://www.instagram.com/marshaaaaal', '_blank').focus();
        }
    }

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
                            <li><a onClick={() => { scroll.scrollToTop(); }} href="#">Home</a></li>
                            <Link
                                to="whole-section"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                <li><a href="#">Portfolio</a></li>
                            </Link>

                            <li><a onClick={() => { scroll.scrollToTop(); }} href="#">Back to top</a></li>

                        </div>
                    </div>

                    <a href="Abasola_Marcial_resume.pdf" download><button >Download Resume</button></a>
                    <h1 className="conn">CONNECT WITH ME</h1>
                    <div className="socials">
                        <img type="button" onClick={() => { actionToOpen(0) }} src="linkedin.png" alt="linkedin" style={{ filter: 'invert(100%)' }} />
                        <img type="button" onClick={() => { actionToOpen(1) }} src="facebook.png" alt="facebook" style={{ filter: 'invert(100%)' }} />
                        <img type="button" onClick={() => { actionToOpen(2) }} src="github.png" alt="github" style={{ filter: 'invert(100%)' }} />
                        <img type="button" onClick={() => { actionToOpen(3) }} src="instagram.png" alt="instagram" style={{ filter: 'invert(100%)' }} />

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
                            <textarea type="text" name="message" />
                        </div>
                        <input className="send" value="Send" type="submit" />
                    </form>
                </div>
            </div>
        </div>

    );
}


export default Footer;