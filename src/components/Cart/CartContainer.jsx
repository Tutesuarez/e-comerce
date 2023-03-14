
import FormCheckOut from "../OrderForm/Form";
import Cart from "./Cart";
import { useCartContext } from "../../context/cartContext"
import { useState } from "react";
import OrderResume from "./OrderResume"


const CartContainer = () => {
    const { cartList } = useCartContext()
    const [showForm, setShowForm] = useState(false)
    const [showOrder, setShowOrder] = useState(true)
    const [idOrder, setIdOrder] = useState('')

    const totalPrice = cartList.reduce(
        (acc, curr) => acc + curr.quantity * curr.price, 0
    )

    function ChangeShowFormParams() {
        setShowForm(true)
    }

    function ChangeOrder(numberOrder) {
        setIdOrder(numberOrder)
        setShowOrder(false)
    }


    if (showOrder) {
        return (
            <>
                <Cart totalPrice={totalPrice} ChangeShowFormParams={ChangeShowFormParams} />
                {
                    showForm ? <FormCheckOut totalPrice={totalPrice} ChangeOrder={ChangeOrder} /> : <></>
                }
            </>)
    } else {
        return (
            <OrderResume idOrder={idOrder} />
        )
    }
}

export default CartContainer

