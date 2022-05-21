import $ from 'jquery';
// import Popper from 'popper.js';
import { useEffect, useState } from 'react';
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
  const timeoutDelay = 1000;
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

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => { setOffsetY(window.pageYOffset) }

  useEffect(() => {
    // Update the document title using the browser API

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    change();
  })
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


        <motion.svg initial={{ x: "100%" }} animate={{ x: "0%" }} transition={{ duration: 1 }} className="hero-design" width="628" height="667" viewBox="0 0 628 667" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M301.214 503L353.428 592.2H249L301.214 503Z" fill="#2A2A2A" />
          <path d="M524.416 95L576.63 184.2H472.202L524.416 95Z" fill="#0B0B0B" />
          <path d="M320.673 38.9429L320.673 455.737H76.6986L320.673 38.9429Z" fill="#1B1B1B" />
          <path d="M431.652 666.239L318.906 473.63H544.397L431.652 666.239Z" fill="#222222" />
          <path d="M198.489 203.135L109.309 50.7836H287.668L198.489 203.135Z" fill="#242424" />
          <path d="M524.49 350.486L434.848 197.346H614.132L524.49 350.486Z" fill="#292929" />
          <path d="M192.086 625L108.451 483.25H275.721L192.086 625Z" fill="#9E00FF" />
          <path d="M447.125 191L363.49 49.25H530.76L447.125 191Z" fill="#9E00FF" />
          <path d="M83.635 384.75L0 243H167.27L83.635 384.75Z" fill="#9E00FF" />
          <path d="M114.646 102.094L166.86 191.294H62.4321L114.646 102.094Z" fill="#282828" />
          <path  style={{ transform: `translateY(${offsetY * 0.2}px)` }} d="M561.839 456.842L320.673 37.9429V456.842H561.839Z" fill="#0F0F0F" />
        </motion.svg>

        {/* <motion.img initial={{ x: "100%" }} animate={{ x: "0%" }} transition={{ duration: 1 }} className="hero-design" src="home-image.svg" alt="me" /> */}
      </div>
    </div>


  );
}

export default Home;