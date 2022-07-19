
import './main.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home/home.js';
import Navbar from './Navbar/navbar.js';
import Section from './Sections/section.js';
import About from './About/about.js';
import Footer from './Footer/footer.js';
import SmoothScroll from './smoothScroll.jsx';
import { useState, useEffect } from 'react';
import './style.css';

const Main = () => {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => { setOffsetY(window.pageYOffset) }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <div className="main">

            <Navbar />
            {/* <SmoothScroll> */}
                <div className="new-bg-hero" style={{ transform: `translateY(${offsetY * 0.5}px)` }}></div>
                <Home />
                <Section />
                <About />
            <Footer />
            {/* </SmoothScroll> */}

        </div>);
}

export default Main;