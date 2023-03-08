import { useCartContext } from "../../context/cartContext"


const CartListRender=()=>{
    const { cartList,removeItem } = useCartContext()
    
    return(
        cartList.map(prod =>
            <tbody className="table-group-divider" key={prod.id}>
                <td className="col  cart__list-img"><img className="cart-img" src={prod.img} /></td>
                <td className="col cart__list-name"><p>{prod.name}</p></td>
                <td className="col cart__list-caract "><p className="input_price text-center">{prod.quantity}</p></td>
                <td className="col cart__list-caract "><p className="input_price text-center">$ {prod.price}</p></td>
                <td className="col cart__list-caract "><p className="input_price text-center">$ {prod.price * prod.quantity}</p></td>
                <td className="col cart__list-caract d-flex justify-content-center"><button className="btn btn-outline-danger" onClick={() => removeItem(prod.id)}>Remove</button></td>
            </tbody>
        )
    )
}

export default CartListRender

