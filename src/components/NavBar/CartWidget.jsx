const Carrito=()=>{
    return(
        <>
        <ul className="navbar-nav ms-auto">
                            <li className="nav-item d-flex">
                                <a className=" nav-link text-white ">
                                    <img src="src/assets/img/001-comprar.png" alt="carrito-compra" />
                                </a>
                                <p className="pe-2 nav text-white align-items-center">3</p>
                            </li>
                            <li className="nav-item">
                                <a className=" nav-link text-white me-3" aria-current="page" href="#">Login</a>
                            </li>
        </ul>
        </>
    )
}

export default Carrito