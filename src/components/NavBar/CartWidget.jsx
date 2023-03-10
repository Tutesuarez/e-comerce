import { Link } from "react-router-dom"
import { useCartContext } from "../../context/cartContext"

const Carrito = () => {
    const { cartList } = useCartContext()

    const quantity = cartList.reduce((acc, curr) => {
        return acc + curr.quantity
    }, 0)

    return (
        <>
            <ul className="navbar-nav ms-auto">
                <li className="nav-item d-flex">
                    {(quantity === 0) ?
                        <p className="pe-1 nav text-white align-items-center"></p>
                        :
                        <p className="pe-1 nav text-white align-items-center">{quantity}</p>
                    }
                    <Link to='/cartContainer' className=" nav-link text-white me-3">
                        <img src="/src/assets/img/001-comprar.png" alt="carrito-compra" />
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default Carrito

