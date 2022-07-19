import React from "react";
import "./footer.css";
class Footer extends React.Component {

    render() {
        return (
            <div className="footer-bg" id="footer">

                <div className="footer">

                    <img src="footer-bg.svg" className="footer-bg" />
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
                            <img src="facebook.png" alt="facebook" />
                            <img src="instagram.png" alt="instagram" />
                            <img src="linkedin.png" alt="linkedin" />
                            <img src="github.png" alt="github" />
                            <img src="twitter.png" alt="twitter" />

                        </div>
                    </div>
                    <div className="contact-me">
                        <h1>CONTACT ME</h1>
                        <div className="email-type">
                            <span>Email:</span>
                            <input type="text" />
                        </div>
                        <div className="email-type">
                            <span>Message:</span>
                            <textarea type="text" />
                        </div>
                        <button>Send</button>
                    </div>
                </div>
            </div>

        );
    }
}

export default Footer;