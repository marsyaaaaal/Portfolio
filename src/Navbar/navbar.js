
import './Navbar.css';
import { motion } from 'framer-motion';
import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";


const Navbar = () => {

    let [shouldShowActions, setShouldShowActions] = React.useState(0);
    const [lastYpos, setLastYpos] = React.useState(0);
    const actionToOpen = (data) => {
        if (data === 0) {
            window.open('https://www.linkedin.com/in/marcial-abasola-a9498b210/', '_blank').focus()
        }
        else if (data === 1) {
            window.open('https://www.facebook.com/profile.php?id=100002844207547', '_blank').focus()
        }
        else if (data === 2) {
            window.open('https://www.github.com/marsyaaaaal', '_blank').focus();
        }
    }

    React.useEffect(() => {
        function handleScroll() {
            const yPos = window.scrollY;
            const isScrollingUp = yPos < lastYpos;
            setShouldShowActions(isScrollingUp);
            setLastYpos(yPos);
        }

        window.addEventListener('scroll', handleScroll, false);

        return () => {
            window.removeEventListener('scroll', handleScroll, false)
        }


    }, [lastYpos])



    return (
        <motion.div className='nav-container-bg fixed-top' style={{ background: window.screen.width <= 979 ? "#171717" : window.scrollY == 0 ? "unset" : "linear-gradient(90deg, #171717 50%, #ffffff 50%)" }} initial={{ y: "-100%" }} animate={{ y: (shouldShowActions || window.scrollY == 0) ? "0%" : "-100%" }} transition={{ duration: 0.5 }} >
            <div className="nav-container ">
                <div className='left-side'>
                    <nav class="navbar navbar-expand-md " style={{ background: "unset" }} >
                        <div class="container-fluid">
                            <a class="navbar-brand" href="#"><img className="logo" src="logo-type.svg" /></a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{ border: "0" }}>
                                <div className="settings" type="button">
                                    <img className='burger' src="white-burger.svg" alt="burger" />
                                </div>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                                <div className="settings-close" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                                    <img className='burger' src="menu-icon.svg" alt="burger" />
                                </div>
                                <ul class="navbar-nav ms-auto mb-2 mb-lg-0" >

                                    <li class="nav-item">
                                        <a onClick={() => { scroll.scrollToTop(); }} class="nav-link" aria-current="page" href="#home">Home</a>
                                    </li>
                                    <Link
                                        to="whole-section"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                        
                                    >
                                        <li class="nav-item">
                                            <a class="nav-link" href="#whole-section">Portfolio</a>
                                        </li>
                                    </Link>

                                    <Link
                                        to="about-me"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                    >
                                    <li class="nav-item">
                                        <a class="nav-link" href="#about">About</a>
                                    </li>
                                    </Link>
                                    <Link
                                        to="footer-bg"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                    >
                                    <li class="nav-item">
                                        <a class="nav-link" href="#footer">Contact</a>
                                    </li>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>

                <div className='right-side'>
                    <div className="social-header">
                        <motion.img onClick={() => { actionToOpen(0) }} whileHover={{ scale: 1.2, filter: "invert(11%) sepia(100%) saturate(5948%) hue-rotate(277deg) brightness(105%) contrast(122%)" }}
                            whileTap={{ scale: 0.8 }} type="button" className='social-logo' src="linkedin.png" alt="linkedin" />
                        <motion.img onClick={() => { actionToOpen(1) }} whileHover={{ scale: 1.2, filter: "invert(11%) sepia(100%) saturate(5948%) hue-rotate(277deg) brightness(105%) contrast(122%)" }}
                            whileTap={{ scale: 0.8 }} type="button" className='social-logo' src="facebook.png" alt="facebook" />
                        <motion.img onClick={() => { actionToOpen(2) }} whileHover={{ scale: 1.2, filter: "invert(11%) sepia(100%) saturate(5948%) hue-rotate(277deg) brightness(105%) contrast(122%)" }}
                            whileTap={{ scale: 0.8 }} type="button" className='social-logo' src="github.png" alt="github" />
                    </div>
                </div>
            </div >
        </motion.div>

    );


}
export default Navbar;