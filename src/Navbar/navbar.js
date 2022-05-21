
import './Navbar.css';
import { motion } from 'framer-motion';
import React from 'react';

const Navbar = () => {

    let [shouldShowActions, setShouldShowActions] = React.useState(0);
    const [lastYpos, setLastYpos] = React.useState(0);

    React.useEffect(() => {
        function handleScroll() {
            const yPos = window.scrollY;
            const isScrollingUp = yPos < lastYpos;
            console.log(lastYpos + 'sadfdasfa')
            setShouldShowActions(isScrollingUp);
            setLastYpos(yPos);
        }

        window.addEventListener('scroll', handleScroll, false);

        return () => {
            window.removeEventListener('scroll', handleScroll, false)
        }


    }, [lastYpos])

    return (
        <motion.div initial={{ y: "-100%" }} animate={{ y: (shouldShowActions || window.scrollY == 0) ? "0%" : "-100%" }} transition={{ duration: 0.5 }} className='nav-container-bg fixed-top '>
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
                                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Portfolio</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">About</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>

                <div className='right-side'>
                    <div className="social-header">
                        <motion.img whileHover={{ scale: 1.2, filter: "invert(11%) sepia(100%) saturate(5948%) hue-rotate(277deg) brightness(105%) contrast(122%)" }}
                            whileTap={{ scale: 0.8 }} type="button" className='social-logo' src="linkedin.png" alt="linkedin" />
                        <motion.img whileHover={{ scale: 1.2, filter: "invert(11%) sepia(100%) saturate(5948%) hue-rotate(277deg) brightness(105%) contrast(122%)" }}
                            whileTap={{ scale: 0.8 }} type="button" className='social-logo' src="facebook.png" alt="facebook" />
                        <motion.img whileHover={{ scale: 1.2, filter: "invert(11%) sepia(100%) saturate(5948%) hue-rotate(277deg) brightness(105%) contrast(122%)" }}
                            whileTap={{ scale: 0.8 }} type="button" className='social-logo' src="github.png" alt="github" />
                    </div>
                </div>
            </div >
        </motion.div>

    );


}
export default Navbar;