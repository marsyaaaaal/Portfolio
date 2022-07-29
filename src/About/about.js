
import React from "react";
import "./about.css";

class About extends React.Component {


    render() {
        return (
            <div className="about-me" id="about">
                <img className="my-picture" src="aboutme.svg" alt="about-me" />
                <div className="about-content">
                    <img className="about-bg" src="about-bg.svg" alt="about-bg" />
                    <h1>About me</h1>
                    <span>A person who loves challenges, got into coding during high school, and thought of it as an interesting skill to hone.</span>
                </div>
            </div>

        );
    }
}

export default About;