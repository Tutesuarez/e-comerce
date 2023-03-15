import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { useEffect, useState } from "react"
import Spinner from "../itemListContainer/loadingSpinner";
import { OrderbuyerResume } from './OrderBuyerResume';
import { OrderListResume } from './OrderListResume';

const OrderResume = ({ idOrder }) => {
    const [orderResume, setOrderResume] = useState([])
    const [loanding, setLoading] = useState(true);
    const { buyer, products, price } = orderResume

    useEffect(() => {
        const db = getFirestore()
        const queryDoc = doc(db, 'Orders', idOrder)

        getDoc(queryDoc)
            .then(respOrder => setOrderResume({ id: respOrder.id, ...respOrder.data() }))
            .catch(err => console.error(err))
            .finally(() => setLoading(false))
    }, [idOrder])

    return (
        <>
            <div className="vw-100 ">
                <div className="cart__title__wrap text-center mb-md-5 mt-5">
                    <h1 className="pt-5 cart__title">Order Summary</h1>
                </div>

                <div className='container mx-auto my-2 p-3 d-flex justify-content-center text-white bg-dark'>
                    <p className='order__code-title fw-bold'>Your order code is:  </p>
                    <p className='order__code-code ps-3'>  {idOrder}</p>
                </div>

                {loanding ?
                    <Spinner />
                    :
                    <div>
                        <div className="container cart__list__wrap">
                            <OrderbuyerResume buyer={buyer} />
                            <table className="table w-100">
                                <thead className="text-center">
                                    <tr>
                                        <th scope="col">Cod</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Product</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Sub Total</th>
                                    </tr>
                                </thead>
                                {
                                    products.map(prod =>
                                        <OrderListResume key={prod.id} prod={prod} />

                                    )
                                }
                            </table>
                            <div className="bg-dark  d-flex justify-content-between sub__total__bar mb-5 mx-0">
                                <p className="text-white my-1 py-1 px-3 fw-bold">Total</p>
                                <p className="text-white my-1 py-1 px-3 fw-bold">$ {price}</p>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default OrderResume