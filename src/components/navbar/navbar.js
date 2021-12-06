import './navbar.css';

export default function Navbar () {
    return (
        <div className='navigation-bar'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="navbar navbar-expand-md">
                            <a href="#"className="navbar-brand">
                                Tour<span>Nest</span>
                            </a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="toggler-icon"></span>
                                <span className="toggler-icon"></span>
                                <span className="toggler-icon"></span>
                            </button>
                            
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <a id='home-link' className="nav-link home active" aria-current="page" href="#home">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a id='about-link' className="nav-link destination" href="#destination">Destination</a>
                                    </li>
                                    <li className="nav-item">
                                        <a id='services-link' className="nav-link packages" href="#packages">Packages</a>
                                    </li>
                                    <li className="nav-item">
                                        <a id='projects-link' className="nav-link special-offers" href="#special-offers">Special Offers </a>
                                    </li>
                                    <li className="nav-item">
                                        <a id='team-link' className="nav-link blog" href="#blog">Blog</a>
                                    </li>
                                    <li className="nav-item">
                                        <a id='contact-link' className="nav-link subscription" href="#subscription">Subscription</a>
                                    </li>
                                    <li className='nav-item'>
                                        <a className="main-btn navbar-btn text-center" href="#">
                                            Book Now
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}