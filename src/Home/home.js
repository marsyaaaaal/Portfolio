import $ from 'jquery';
// import Popper from 'popper.js';
import { useEffect } from 'react';
import './home.css';
import { motion } from 'framer-motion';
// import WebFont from 'webfontloader';



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
      console.log(titles[counter])
    });
  }

  useEffect(() => {
    // Update the document title using the browser API
    change();
  });
  return (
    <div className='hero-bg'>
      <div className="hero">
        <motion.div initial={{ x: "-100%" }} animate={{ x: "0%" }} transition={{ duration: 1 }} className="content">
          <motion.div className='content-text'>
            <h1> Hello <br />World!</h1>
            <div className="meet">
              <span>I am <span className="name"> Marcial </span>, an aspiring <span id="name">Back End Developer </span></span>
            </div>
            <div className='go-to'  >
              <motion.button whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}>Go to Portfolio</motion.button>
            </div>
          </motion.div>

        </motion.div>
        <motion.img initial={{ x: "100%" }} animate={{ x: "0%" }} transition={{ duration: 1 }} className="hero-design" src="home-image.svg" alt="me" />
      </div>
    </div>


  );
}

export default Home;