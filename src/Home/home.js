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
              <span>I am <span className="name"> Marcial </span>, an aspiring <br /><span id="name">Back End Developer </span></span>
            </div>
            <div className='go-to'  >
              <a href="#whole-section" style={{textDecoration:"none"}} >
                <motion.button whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                >Go to Portfolio</motion.button>
              </a>
            </div>
          </motion.div>

        </motion.div>

        <div className='hero-design'>
          <motion.svg className="hero-design-svg" initial={{ x: "100%" }} animate={{ x: "0%" }} transition={{ duration: 1 }} width="647" height="607" viewBox="0 0 647 607" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path style={{ transform: `translateY(${offsetY * 0.1}px)` }} d="M309.214 486L361.428 575.2H257L309.214 486Z" fill="#2A2A2A" />
            <path style={{ transform: `translateY(${offsetY * 0.1}px)` }} d="M511.214 118L563.428 207.2H459L511.214 118Z" fill="#0B0B0B" />
            <path style={{ transform: `translateY(${offsetY * 0.1}px)` }} d="M179.976 203.135L90.7962 50.7836H269.156L179.976 203.135Z" fill="#242424" />
            <path style={{ transform: `translateY(${offsetY * 0.1}px)` }} d="M439.976 203.135L350.796 50.7836H529.156L439.976 203.135Z" fill="#9E00FF" />
            <path style={{ transform: `translateY(${offsetY * 0.1}px)` }} d="M542.51 381.187L452.868 228.047H632.152L542.51 381.187Z" fill="#292929" />
            <path style={{ transform: `translateY(${offsetY * 0.1}px)` }} d="M180.086 607L96.4509 465.25H263.721L180.086 607Z" fill="#9E00FF" />
            <path style={{ transform: `translateY(${offsetY * 0.1}px)` }} d="M433.573 607L349.938 465.25H517.208L433.573 607Z" fill="#222222" />
            <path style={{ transform: `translateY(${offsetY * 0.1}px)` }} d="M83.635 366.75L0 225H167.27L83.635 366.75Z" fill="#9E00FF" />
            <path style={{ transform: `translateY(${offsetY * 0.1}px)` }} d="M107.214 117L159.428 206.2H55L107.214 117Z" fill="#282828" />
            <path d="M550 439L309 20V439H550Z" fill="#0F0F0F" />
            <path d="M68 439L309 20V439H68Z" fill="#1B1B1B" />
          </motion.svg>

        </div>


        {/* <motion.img initial={{ x: "100%" }} animate={{ x: "0%" }} transition={{ duration: 1 }} className="hero-design" src="home-image.svg" alt="me" /> */}
      </div>
    </div>


  );
}

export default Home;