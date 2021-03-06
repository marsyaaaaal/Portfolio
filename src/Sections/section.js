
import { React, useState, useEffect } from 'react';
import './section.css';
import SubSection from './Subsection/Subsection.js';
import Slider from '@farbenmeer/react-spring-slider';
import { AnimatePresence, motion } from 'framer-motion';

// class Section extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             header: ''
//         };
//         this.front_end_titles = ['Random Quote Generator', 'Javascript Calculator', 'Markdown Previewer', 'Drum Machine', 'Pomodoro Timer'];
//         this.back_end_titles = ['TimeStamp', 'Header Parser', 'URL Shortener', 'Exercise Tracker', 'File Metadata'];
//         this.team_works = [{
//             title: 'DetectCore',
//             role: 'Full Stack Developer',
//             images: ['Team-projects/detectcore.png'],
//             stack: 'Python, Pytorch, PyQT and MongoDB'
//         },
//         {
//             title: 'iAssist',
//             role: 'Front End Developer',
//             images: ['Team-projects/iAssist.png'],
//             stack: 'Flutter'
//         },
//         {
//             title: 'pasaBUY',
//             role: 'Full Stack Developer',
//             // images: ['Team-projects/pasabuy1.png', 'Team-projects/pasabuy2.png', 'Team-projects/pasabuy3.png'],
//             images: ['Team-projects/pasabuy1.png'],
//             stack: 'Laravel, Vue.js, Vuex and MySql'
//         },
//         {
//             title: 'e-Tiquet',
//             role: 'Full Stack Developer',
//             images: ['Team-projects/eTiquet.png'],
//             stack: 'PHP, Bootstrap, HTML, CSS, JavaScript and MySql'
//         },
//         {
//             title: 'Clinic System',
//             role: 'Full Stack Developer',
//             images: ['Team-projects/clinic.png'],
//             stack: 'PHP, Bootstrap, HTML, CSS, JavaScript and MySql'
//         },
//         {
//             title: 'Library System',
//             role: 'Full Stack Developer',
//             images: ['Team-projects/Library.png'],
//             stack: 'PHP, Bootstrap, HTML, CSS, JavaScript and MySql'
//         }]
//     }

//     render() {

//         const [offsetY, setOffsetY] = useState(0);
//         const handleScroll = () => { setOffsetY(window.pageYOffset) }

//         useEffect(() => {
//             // Update the document title using the browser API

//             window.addEventListener("scroll", handleScroll);

//             return () => window.removeEventListener("scroll", handleScroll);
//         }, []);

//         let team_projects = [];

//         this.team_works.map((item, i) => {
//             if (i % 2 === 0) {
//                 team_projects.push(
//                     <div className="content-portfolio">
//                         <div className="left">
//                             <div className="text">
//                                 <h1>{item.title} </h1>
//                                 <span className='role'>{item.role} </span><span className='line'>|</span>
//                                 <span className='stack'> {item.stack}</span>
//                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget mattis semper suspendisse est.
//                                     Lacus mi nunc ac lectus.</p>
//                             </div>

//                         </div>
//                         <div className="right">
//                             {
//                                 // console.log("right")

//                                 item.images.map((im) => <img className='portfolio-image' src={im} alt={item.title} />)
//                             }

//                         </div>



//                     </div>
//                 );
//             } else {
//                 team_projects.push(
//                     <div className="content-portfolio">
//                         <div className="right">
//                             <div className="text">

//                                 <h1>{item.title} </h1>
//                                 <span className='role'>{item.role} </span><span className='line'>|</span>
//                                 <span className='stack'> {item.stack}</span>
//                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget mattis semper suspendisse est.
//                                     Lacus mi nunc ac lectus.</p>
//                             </div>
//                         </div>

//                         <div className="left">
//                             {
//                                 // console.log("left")
//                                 item.images.map((im) => <img className='portfolio-image' src={im} alt={item.title} />)
//                             }

//                         </div>
//                     </div>
//                 );
//             }

//         });

//         return (
//             <div className='whole-section'>
//                 <div className='whole-section-container'>
//                     <div className="section-container">
//                         <span className="text-works"> My works </span>
//                         <div className="upper-section">
//                             <SubSection
//                                 header="FreeCodeCamp.org Front End Development and Libraries Projects"
//                                 subHeader="Javascript, SCSS, Bootstrap, React.js and Redux"
//                                 titles={this.front_end_titles}
//                                 type="Front-end" />
//                         </div>
//                         <div className="lower-section">
//                             <SubSection
//                                 header="FreeCodeCamp.org Back End Development and APIs Projects"
//                                 subHeader="Node.js, Express, MongoDB and Mongoose"
//                                 titles={this.back_end_titles}
//                                 type="Back-end" />
//                         </div>
//                     </div >
//                 </div>
//                 <div className='team-projects-bg'>
//                     <div className="team-projects">
//                         <span className='text-team'>Team Projects</span>
//                         {team_projects}
//                         <img className='team-projects-bg1' src="team-projects-bg1.svg" about=".." />
//                         <img className='team-projects-bg2' src="team-projects-bg2.svg" about=".." />
//                         <img className='team-projects-bg3' src="team-projects-bg1.svg" about=".." />
//                         <img className='team-projects-bg4' src="team-projects-bg2.svg" about=".." />
//                         <img className='team-projects-bg5' src="team-projects-bg1.svg" about=".." />
//                         <img className='team-projects-bg6' src="team-projects-bg2.svg" about=".." />
//                     </div>
//                 </div>

//             </div>
//         );
//     }



// }


const Section = (props) => {
    const front_end = [
        {
            title: 'Random Quote Generator',
            link: 'https://codepen.io/marsyaaaaal/full/wvpjZNO',
            description: 'Built a random quote generator that can be shared through twitter using Bootstrap, Javascript and CSS.'
        },
        {
            title: 'Javascript Calculator',
            link: 'https://codepen.io/marsyaaaaal/full/wvpYOqV',
            description: 'Built a Javascript Calculator that follow PEMDAS rule using SASS, Bootstrap and Redux. '
        },
        {
            title: 'Markdown Previewer',
            link: 'https://codepen.io/marsyaaaaal/full/MWrXYYx',
            description: 'Developed a Markdown Previewer, converts HTML tags to a web preview in real-time.'
        },
        {
            title: 'Drum Machine',
            link: 'https://codepen.io/marsyaaaaal/full/NWXzvrB',
            description: 'Developed a drum pad machine that can be triggered using keys.'
        },
        {
            title: 'Pomodoro Timer',
            link: 'https://codepen.io/marsyaaaaal/full/gOoQroX',
            description: 'Developed a pomodoro timer with alarm sound. All using the above principles and/or frameworks and languages.'
        },
    ]
    const back_end = [
        {
            title: 'TimeStamp',
            link: 'https://boilerplate-project-timestamp.marsyaaaaal.repl.co/',
            description: 'Created a timestamp microservice that returns the timestamp of the current and/or inputted date.'
        },
        {
            title: 'Header Parser',
            link: 'https://boilerplate-project-headerparser.marsyaaaaal.repl.co',
            description: 'Created an endpoint that returns the data of the machine/browser used.'
        },
        {
            title: 'URL Shortener',
            link: 'https://boilerplate-project-urlshortener-1.marsyaaaaal.repl.co/',
            description: 'Created a URL shortener microservice, converts inputted URL into [project_link]/[api]\n/shorturl/'
        },
        {
            title: 'Exercise Tracker',
            link: 'https://replit.com/@marsyaaaaal/boilerplate-project-exercisetracker#server.js',
            description: 'Used MongoDB to store inputted data, and node.js to create the API endpoints.'
        },
        {
            title: 'File Metadata',
            link: 'https://boilerplate-project-filemetadata.marsyaaaaal.repl.co/',
            description: 'File upload microservice, using the mentioned framworks/languuages above.'
        },
    ]
    const team_works = [{
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
        // images: ['Team-projects/pasabuy1.png', 'Team-projects/pasabuy2.png', 'Team-projects/pasabuy3.png'],
        images: ['Team-projects/pasabuy1.png'],
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

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => { setOffsetY(window.pageYOffset) }
    const [selectedId, setSelectedId] = useState(null)

    useEffect(() => {
        // Update the document title using the browser API

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);



    let team_projects = [];

    team_works.map((item, i) => {
        if (i % 2 === 0) {
            team_projects.push(
                <div className="content-portfolio">
                    <div className="left">
                        <div className="text">
                            <h1>{item.title} </h1>
                            <span className='role'>{item.role} </span><span className='line'>|</span>
                            <span className='stack'> {item.stack}</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget mattis semper suspendisse est.
                                Lacus mi nunc ac lectus.</p>
                        </div>

                    </div>
                    <div className="right">
                        {
                            // console.log("right")

                            item.images.map((im) => <img className='portfolio-image' src={im} alt={item.title} />)
                        }

                    </div>



                </div>
            );
        } else {
            team_projects.push(
                <div className="content-portfolio">
                    <div className="right">
                        <div className="text">

                            <h1>{item.title} </h1>
                            <span className='role'>{item.role} </span><span className='line'>|</span>
                            <span className='stack'> {item.stack}</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget mattis semper suspendisse est.
                                Lacus mi nunc ac lectus.</p>
                        </div>
                    </div>

                    <div className="left">
                        {
                            // console.log("left")
                            item.images.map((im) => <img className='portfolio-image' src={im} alt={item.title} />)
                        }

                    </div>
                </div>
            );
        }

    });

    return (
        <div className='whole-section' id="whole-section">
            <div className='whole-section-container'>
                <div className="new-bg-hero" style={{ transform: `translateY(${offsetY * 0.2}px)` }}></div>
                <div className="section-container">
                    <span className="text-works"> My works </span>
                    <div className="upper-section">
                        <SubSection
                            header="FreeCodeCamp.org Front End Development and Libraries Projects"
                            subHeader="Javascript, SCSS, Bootstrap, React.js and Redux"
                            type="Front-end"
                            data={front_end}
                            link="https://www.freecodecamp.org/certification/fcc36581fa7-10ee-4a6e-b693-1787fd043aa9/front-end-development-libraries" />
                    </div>
                    <div className="lower-section">

                        <SubSection
                            header="FreeCodeCamp.org Back End Development and APIs Projects"
                            subHeader="Node.js, Express, MongoDB and Mongoose"
                            type="Back-end"
                            data={back_end}
                            link="https://www.freecodecamp.org/certification/fcc36581fa7-10ee-4a6e-b693-1787fd043aa9/back-end-development-and-apis" />

                    </div>
                </div >
            </div>
            <div className='team-projects-bg-0'>
                <div className='team-projects-bg'>
                    <div className="team-projects">
                        <span className='text-team'>Team Projects</span>
                        <div className='team-projects-scroll-bg'>

                            <img style={{ transform: `translate3d(0px, ${Math.min(offsetY * 0.1, 0)}px, 0px)` }} className='team-projects-bg1' src="team-projects-bg1.svg" about=".." />
                            <img style={{ transform: `translate3d(0px, ${Math.min(offsetY * 0.1, 0)}px, 0px)` }} className='team-projects-bg2' src="team-projects-bg2.svg" about=".." />
                        </div>
                        {team_projects}

                        {/* <img style={{ transform: `translateY(${offsetY * -0.1}px)` }}className='team-projects-bg3' src="team-projects-bg1.svg" about=".." />
                    <img style={{ transform: `translateY(${offsetY * -0.1}px)` }}className='team-projects-bg4' src="team-projects-bg2.svg" about=".." />
                    <img style={{ transform: `translateY(${offsetY * -0.1}px)` }}className='team-projects-bg5' src="team-projects-bg1.svg" about=".." />
                    <img style={{ transform: `translateY(${offsetY * -0.1}px)` }}className='team-projects-bg6' src="team-projects-bg2.svg" about=".." /> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Section;