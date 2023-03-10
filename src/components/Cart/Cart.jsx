import { useCartContext } from "../../context/cartContext"
import "../Cart/Cart.css"
import CartListRender from "./CartRender";
import EmptyCart from "./EmptyCart";


const Cart = ({totalPrice,ChangeShowFormParams}) => {
    const { cartList, emptyCart } = useCartContext()

    const handleChange=()=>{
        ChangeShowFormParams()
    }

    return (
        <div className="vw-100">
        <div className="cart__title__wrap text-center mb-md-5 mt-5">
            <h1 className="pt-5 cart__title">Your cart</h1>
        </div>
        <div className="container cart__list__wrap">
            <table className="table w-100">
                <thead className="table-dark text-center">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Product</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Sub Total</th>
                        <th scope="col">Remove items</th>
                    </tr>
                </thead>
                {cartList.length ?
                    <CartListRender />
                    :
                    <EmptyCart />
                }
            </table>
            <div className="bg-dark  d-flex justify-content-between sub__total__bar">
                <p className="text-white my-1 py-1 px-3 fw-bold">Total</p>
                <p className="text-white my-1 py-1 px-3 fw-bold">$ {totalPrice}</p>
            </div>
            <div className="d-flex justify-content-between">
                {cartList.length ?
                    <>
                        <button className="btn btn-danger my-3" onClick={emptyCart} >Empty Cart</button>
                        <button className="btn btn-dark my-3 fw-bold" onClick={handleChange}>CHECK OUT</button>
                    </>
                    :
                    <></>
                }
            </div>
        </div>
    </div>
    )
}
export default Cart


//////////////////////

/*
import { useCartContext } from "../../context/cartContext"
import "../Cart/Cart.css"
import CartListRender from "./CartRender";
import EmptyCart from "./EmptyCart";
import FormCheckOut from "../OrderForm/Form";
import { useState } from "react";


const Cart = () => {
    const { cartList, emptyCart } = useCartContext()
    const [showForm, setShowForm] = useState(false)

    const totalPrice = cartList.reduce(
        (acc, curr) => acc + curr.quantity * curr.price, 0
    )

    return (
        <div className="vw-100">
            <div className="cart__title__wrap text-center mb-md-5 mt-5">
                <h1 className="pt-5 cart__title">Your cart</h1>
            </div>
            <div className="container cart__list__wrap">
                <table className="table w-100">
                    <thead className="table-dark text-center">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Product</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                            <th scope="col">Sub Total</th>
                            <th scope="col">Remove items</th>
                        </tr>
                    </thead>
                    {cartList.length ?
                        <CartListRender />
                        :
                        <EmptyCart />
                    }
                </table>
                <div className="bg-dark  d-flex justify-content-between sub__total__bar">
                    <p className="text-white my-1 py-1 px-3 fw-bold">Total</p>
                    <p className="text-white my-1 py-1 px-3 fw-bold">$ {totalPrice}</p>
                </div>
                <div className="d-flex justify-content-between">
                    {cartList.length ?
                        <>
                            <button className="btn btn-danger my-3" onClick={emptyCart} >Empty Cart</button>
                            <button className="btn btn-dark my-3 fw-bold" onClick={() => { setShowForm(true) }}>CHECK OUT</button>
                        </>
                        :
                        <></>
                    }
                </div>
                <div className="">
                    {showForm ?
                        <FormCheckOut totalPrice={totalPrice} />
                        :
                        <></>
                    }
                </div>
            </div>
        </div>
    )
}
export default Cart



*/