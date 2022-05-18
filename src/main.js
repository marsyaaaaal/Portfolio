
import './main.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home/home.js';
import Navbar from './Navbar/navbar.js';
import Section from './Sections/section.js';
import About from './About/about.js';
import Footer from './Footer/footer.js';



const Main = () => {
    return (
        <div className="main">
            <Navbar />
            <Home />
            <Section />
            <About />
            <Footer />
        </div>);
}

export default Main;