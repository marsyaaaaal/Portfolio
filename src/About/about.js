
import React from "react";
import "./about.css";

class About extends React.Component {


    render() {
        return (
            <div className="about-me">
                <img className="my-picture" src="aboutme.svg" alt="about-me" />
                <div className="about-content">
                    <img className="about-bg" src="about-bg.svg" alt="about-bg" />
                    <h1>About me</h1>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non egestas sed fermentum nunc sit nibh eget. Donec justo, eu phasellus libero, donec porta tellus in.</span>
                </div>
            </div>

        );
    }
}

export default About;