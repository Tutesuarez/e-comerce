import { Link } from "react-router-dom"

const Carrito=()=>{
    return(
        <>
        <ul className="navbar-nav ms-auto">
            <li className="nav-item d-flex">
                <p className="pe-1 nav text-white align-items-center">3</p>
                    <Link to='/Cart' className=" nav-link text-white me-3">
                        <img src="/src/assets/img/001-comprar.png" alt="carrito-compra" />
                    </Link>    
            </li>
        </ul>
        </>
    )
}

export default Carrito