
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container } from 'react-bootstrap';
import Home from './Home/home.js';
import Portfolio from './Portfolio/portfolio.js';

const Main = () => {
    return (
        <div>
            <div className="main-home">
                <div style={{ backgroundColor: "black" }}>ss
                    <Navbar bg="black" sticky="top" style={{ marginTop: "4vh" }}>
                        <Container>
                            <Navbar.Brand href="#home">
                                <img
                                    src="logo-black.png"
                                    style={{ width: "10vh", height: "auto" }}
                                    className="d-inline-block align-top"
                                    alt="My logo"
                                />
                            </Navbar.Brand>
                        </Container>
                    </Navbar>
                </div>
                <Home />
            </div>
            
            <Portfolio />
        </div>);
}

export default Main;