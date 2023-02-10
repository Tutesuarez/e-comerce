
import { Link} from "react-router-dom"
import CartWidget from "./CartWidget"


const Navbar = () => {
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container-fluid ">
                    <Link to='/home'>
                        <img src="/src/assets/img/LOGO.svg" alt="Logo Fashion" />
                    </Link>
                    <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse text-uppercase" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                            <li className="nav-item ">
                                <Link className="nav-link text-white active me-3" aria-current="page"  to='/home'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white me-3" to='/categoria/woman'>Women</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white me-3" to='/categoria/man'>Men</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white me-3"  to='/categoria/kids' >Kids</Link>
                            </li>
                        </ul>
                        <CartWidget/>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar