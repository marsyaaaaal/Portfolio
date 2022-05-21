
import './main.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home/home.js';
import Navbar from './Navbar/navbar.js';
import Section from './Sections/section.js';
import About from './About/about.js';
import Footer from './Footer/footer.js';
import SmoothScroll from './smoothScroll.jsx';


const Main = () => {
    return (
        <div className="main">
            <div className="new-bg-hero" ></div>
            <Navbar />
            {/* <SmoothScroll> */}
            <Home />
            <Section />
            <About />
            {/* </SmoothScroll> */}
            <Footer />

        </div>);
}

export default Main;