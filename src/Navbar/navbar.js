
import './Navbar.css';

const Navbar = () => {

    return (
        <div className="nav-container">
            <header>
                <a href="#index"><img className="logo" src="logo.svg" /></a>
                <nav>
                    <ul>
                        <li> <a href="#">Portfolio</a></li>
                        <li> <a href="#">About</a></li>
                        <li> <a href="#">Contact</a></li>

                    </ul>
                </nav>
                <div className="settings" type="button">
                    <img src="white-burger.svg" alt="burger" />
                </div>
            </header>

            <div className="social-header">
                <ul>
                    <li> <a href="#"><img src="linkedin.png" alt="linkedin" /> </a></li>
                    <li> <a href="#"><img src="facebook.png" alt="facebook" /> </a></li>
                    <li> <a href="#"><img src="github.png" alt="github" /> </a></li>
                </ul>
            </div>
        </div >

    );


}
export default Navbar;