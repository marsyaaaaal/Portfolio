import React from "react";

class Footer extends React.Component {

    render() {
        return (
            <div>
                <div className="contacts">
                    <h1>MARCIAL ABASOLA</h1>
                    <img src="email.svg" alt="email" />
                    <span>marcial.abasolajr18@gmail.com</span>
                    <ul>
                        <li>Home</li>
                        <li>Portfolio</li>
                        <li>Back to top</li>
                    </ul>
                    <img src="resume.svg" alt="resume" />

                    <h1>CONNECT WITH ME</h1>
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
                    <div>
                        <span>Email:</span>
                        <input type="text" />
                    </div>
                    <div>
                        <span>Message:</span>
                        <textarea type="text" />
                    </div>
                    <button>Send</button>
                </div>
            </div>
        );
    }
}

export default Footer;