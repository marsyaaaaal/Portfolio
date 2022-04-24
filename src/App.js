 import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container} from 'react-bootstrap';
import Home from './Home/home.js';

function App() {

  return (
    <div>
      <Navbar bg="black">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="logo-black.png"
              width="80"
              height="80"
              className="d-inline-block align-top"
              alt="My logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    <Home/>

    </div>
  );
}

export default App;
