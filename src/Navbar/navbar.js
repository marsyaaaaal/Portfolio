
import './Navbar.css';

const Navbar = () => {

    return (
        <div className="nav-container">
            <header>
                <a class="logo" href="#index">Marcial Abasola</a>
                <nav>
                    <ul>
                        <li> <a href="#">Home </a></li>
                        <li> <a href="#">Portfolio</a></li>
                        <li> <a href="#">About</a></li>
                        <li> <a href="#">Contact</a></li>

                    </ul>
                </nav>
            </header>

            <div class="social-header">
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