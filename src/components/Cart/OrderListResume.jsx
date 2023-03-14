
export const OrderListResume = ({products}) => {
    return (
        <>
            {
                products.map(prod =>
                    <tbody className="table-group-divider" key={prod.id}>
                        <td className="col cart__list-caract "><p className="input_price text-center">{prod.id}</p></td>
                        <td className="col cart__list-caract "><p className="input_price text-center">{prod.quantity}</p></td>
                        <td className="col cart__list-caract"><p className="input_price text-center">{prod.name}</p></td>
                        <td className="col cart__list-caract "><p className="input_price text-center">$ {prod.price}</p></td>
                        <td className="col cart__list-caract "><p className="input_price text-center">$ {prod.price * prod.quantity}</p></td>
                    </tbody>
                )
            }
        </>
    )
}

