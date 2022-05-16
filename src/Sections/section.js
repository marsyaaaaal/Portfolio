
import React from 'react';
import './section.css';
import SubSection from './Subsection/Subsection.js';
import Portfolio from './Portfolio/portfolio.js';

class Section extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            header: ''
        };
        this.front_end_titles = ['Random Quote Generator', 'Javascript Calculator', 'Markdown Previewer', 'Drum Machine', 'Pomodoro Timer'];
        this.back_end_titles = ['TimeStamp', 'Header Parser', 'URL Shortener', 'Exercise Tracker', 'File Metadata'];
        this.team_works = [{
            title: 'DetectCore',
            role: 'Full Stack Developer',
            images: ['Team-projects/detectcore.png'],
            stack: 'Python, Pytorch, PyQT and MongoDB'
        },
        {
            title: 'iAssist',
            role: 'Front End Developer',
            images: ['Team-projects/iAssist.png'],
            stack: 'Flutter'
        },
        {
            title: 'pasaBUY',
            role: 'Full Stack Developer',
            images: ['Team-projects/pasabuy1.png', 'Team-projects/pasabuy2.png', 'Team-projects/pasabuy3.png'],
            stack: 'Laravel, Vue.js, Vuex and MySql'
        },
        {
            title: 'e-Tiquet',
            role: 'Full Stack Developer',
            images: ['Team-projects/eTiquet.png'],
            stack: 'PHP, Bootstrap, HTML, CSS, JavaScript and MySql'
        },
        {
            title: 'Clinic System',
            role: 'Full Stack Developer',
            images: ['Team-projects/clinic.png'],
            stack: 'PHP, Bootstrap, HTML, CSS, JavaScript and MySql'
        },
        {
            title: 'Library System',
            role: 'Full Stack Developer',
            images: ['Team-projects/Library.png'],
            stack: 'PHP, Bootstrap, HTML, CSS, JavaScript and MySql'
        }]
    }

    render() {
        let team_projects = [];

        this.team_works.map((item, i) => {
            if (i % 2 === 0) {
                team_projects.push(
                    <div className="content-portfolio">
                        <div className="left">
                            <h1>{item.title} </h1>
                            <span>{item.role} |</span>
                            <span> {item.stack}</span>
                        </div>
                        <div className="right">
                            {
                                // console.log("right")

                                item.images.map((im) => <img src={im} alt={item.title} />)
                            }

                        </div>



                    </div>
                );
            } else {
                team_projects.push(
                    <div className="content-portfolio">
                        <div className="right">
                            <h1>{item.title} </h1>
                            <span>{item.role} |</span>
                            <span> {item.stack}</span>
                        </div>
                        <div className="left">
                            {
                                // console.log("left")
                                item.images.map((im) => <img src={im} alt={item.title} />)
                            }

                        </div>
                    </div>
                );
            }

        });

        return (
            <div>
                <div className="section-container">
                    <span className="text-works"> My works </span>
                    <div className="upper-section">
                        <SubSection
                            header="FreeCodeCamp.org Front End Development and Libraries Projects"
                            subHeader="Javascript, SCSS, Bootstrap, React.js and Redux"
                            titles={this.front_end_titles}
                            type="Front-end" />
                    </div>
                    <div className="lower-section">
                        <SubSection
                            header="FreeCodeCamp.org Back End Development and APIs Projects"
                            subHeader="Node.js, Express, MongoDB and Mongoose"
                            titles={this.back_end_titles}
                            type="Back-end" />
                    </div>
                </div >
                <div className="Team-projects">
                    <span>Team Projects</span>
                    {team_projects}
                </div>
            </div>
        );
    }



}
export default Section;