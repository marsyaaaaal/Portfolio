
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home/home.js';
import Navbar from './Navbar/navbar.js';


const Main = () => {
    return (
        <div>
            <Navbar />
            <Home />
        </div>);
}

export default Main;