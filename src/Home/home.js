import $ from 'jquery';
// import Popper from 'popper.js';
// import { useEffect } from 'react';
import './home.css';
import { motion } from 'framer-motion';
// import WebFont from 'webfontloader';
import Section from '../Sections/section.js';
import About from '../About/about.js';
import Footer from '../Footer/footer.js';




const Icons = (props) => {
  return (
    <motion.div
      whileHover={{ scale: 1.5 }}
      whileTap={{ scale: 0.9 }}
    >
      <a href={props.props.href}
        target='_blank'>
        <img className='contact-icon' src={props.props.src} title={props.props.href} />
      </a>
    </motion.div >
  );
}



const Home = () => {
  const titles = [
    'Full Stack Developer',
    'Back End Developer',
    'Front End Developer',
    'Web Developer',
    'Python Developer',
    'Java Developer'
  ]
  const timeoutDelay = 1500;
  let counter = 0;
  var elem = document.getElementById("name");

  const change = function () {
    $(elem).delay(timeoutDelay).fadeTo(1000, 0, function () {
      this.innerHTML = titles[counter];
      counter = ++counter % titles.length;
      $(this).fadeTo(1000, 1, change)
    });
  }

  return (
    <div>

      <div className="hero">
        <div className="content">
          <h1> Hello <br />World!</h1>
          <div className="meet">
            <span>I am <span className="name"> Marcial </span>, an aspiring Back End Developer</span>
          </div>
          <div type="button">
            <img class="call-to-action" src="call-to-action.svg" alt="know me" />
          </div>
        </div>
        <div className="hero-design">
          <img className="hero-image" src="home-image.svg" alt="me" />
        </div>


      </div>

      <Section />
      <About />
      <Footer />

    </div>

  );
}

export default Home;