import $ from 'jquery';
import Popper from 'popper.js';
import { useEffect } from 'react';
import '../App.css';
import { motion } from 'framer-motion';
import WebFont from 'webfontloader';



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
  useEffect(() => {
    change();
    WebFont.load({
      google: {
        families: ['Raleway']
      }
    });
  }, []);
  return (
    <div className="main-home row" style={{marginTop:"80px"}}>
      <div className="col-md-6 d-flex align-items-top justify-content-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2.5 }} className='left-home'>
          <img className='my-pic' src="pc-guy.png"/>
        </motion.div>
      </div>
      <div className="col-md-6">
        <motion.div className="right-home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2.5 }}>
          <div className="big-text">
            <h1 style={{ fontSize: "10vw", fontWeight:"bold" }}>Hello!</h1>
            <h2 style={{ fontSize: "2vw" }}>I am Marcial C. Abasola Jr.</h2>
            <h2 style={{ fontSize: "2vw" }}>an aspiring <span id="name"></span></h2>
          </div>
          <div className="row">
            <div className='col-md-4 d-flex justify-content-start'>
              <div className='div-icons'>
                <Icons props={{ href: "https://facebook.com/100002844207547", src: "facebook.svg" }} />
              </div>
              <div className='div-icons'>
                <Icons props={{ href: "https://linkedin.com/in/marcial-abasola-a9498b210", src: "linkedin.svg" }} />
              </div>
              <div className='div-icons'>
                <Icons props={{ href: "https://github.com/marsyaaaaal", src: "github.svg" }} />
              </div>
              <div className='div-icons'>
                <Icons props={{ href: "https://instagram.com/marshaaaaal", src: "instagram.svg" }} />
              </div>
            </div>
            <div className='col-md-4 d-flex justify-content-start '>
              <motion.div type="button" className='my-btn' whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}>
                  Portfolio  
              </motion.div>
            </div>
            <div className='col-md-4'></div>
          </div>
        </motion.div>

      </div>

    </div>
  );
}

export default Home;