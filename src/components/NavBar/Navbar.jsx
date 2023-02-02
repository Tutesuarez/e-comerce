import CartWidget from "./CartWidget"


const NavBar = () => {
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container-fluid ">
                    <a href="#">
                        <img src="src/assets/img/LOGO.svg" alt="Logo Fashion" />
                    </a>
                    <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse text-uppercase" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                            <li className="nav-item ">
                                <a className="nav-link text-white active me-3" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white me-3" href="#">Women</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white me-3" href="#">Men</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white me-3" href="#">Kids</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white me-3" href="#">Contact</a>
                            </li>
                        </ul>
                        <CartWidget/>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default NavBar