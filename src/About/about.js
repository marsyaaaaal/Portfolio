
import React from "react";


class About extends React.Component {


    render() {
        return (
            <div className="About-me">
                <img src="aboutme.svg" alt="about-me" />
                <div className="about-content">
                    <h1>About me</h1>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non egestas sed fermentum nunc sit nibh eget. Donec justo, eu phasellus libero, donec porta tellus in.</span>
                </div>
            </div>

        );
    }
}

export default About;