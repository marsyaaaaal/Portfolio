
import './Navbar.css';

const Navbar = () => {
    

    return (
        <div className="nav-container">
            <div className='left-side'>
                <nav class="navbar navbar-expand-lg " style={{ backgroundColor: "#343A40" }} >
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#"><img className="logo" src="logo.svg" /></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{ border: "0" }}>
                            <div className="settings" type="button">
                                <img className='burger' src="white-burger.svg" alt="burger" />
                            </div>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
                    <img type="button" className='social-logo' src="linkedin.png" alt="linkedin" />
                    <img type="button" className='social-logo' src="facebook.png" alt="facebook" />
                    <img type="button" className='social-logo' src="github.png" alt="github" />
                </div>
            </div>




        </div >

    );


}
export default Navbar;