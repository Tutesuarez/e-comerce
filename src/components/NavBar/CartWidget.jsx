import { Link } from "react-router-dom"

const Carrito=()=>{
    return(
        <>
        <ul className="navbar-nav ms-auto">
                            <li className="nav-item d-flex">
                                <Link to='/Cart' className=" nav-link text-white ">
                                    <img src="src/assets/img/001-comprar.png" alt="carrito-compra" />
                                </Link>
                                <p className="pe-2 nav text-white align-items-center">3</p>
                            </li>
                            <li className="nav-item">
                                <Link className=" nav-link text-white me-3" aria-current="page" href="#">Login</Link>
                            </li>
        </ul>
        </>
    )
}

export default Carrito