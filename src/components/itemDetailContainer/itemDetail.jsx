import "../itemDetailContainer/itemDetail.css";
import { useEffect, useState } from "react"
import { mFetch } from "../../mFetch";
import { useParams } from "react-router-dom"
import Spinner from "../itemListContainer/loadingSpinner";

export const ItemDetail = () => {
    const [product, setProduct] = useState([]);
    const [loanding, setLoading] = useState(true);
    const { idProducto } = useParams();
    const [quantity, setQuantity] = useState('');
    useEffect(() => {
        if (idProducto) {
            mFetch()
                .then(resp => setProduct(resp.find(prod => prod.id === idProducto)))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        } else {
            mFetch()
                .then(resp => setProduct(resp))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }
    }, [idProducto])
    console.log(quantity);

    return (
        <>
            {loanding ?
                <Spinner />
                :
                <div className="detail__container__wrap container-fluid row vw-100 p-0">
                    <div className="detail__container-img col-12 col-lg-6 d-flex justify-content-lg-end pe-md-3 justify-content-center">
                        <img className="detail-img" src={product.img} alt="" />
                    </div>
                    <div className="detail__container__description col-12 col-lg-6 mt-2 mt-lg-0 ">
                        <div className="mt-3 mt-md-0">
                            <h2 className="detail-name-product">{product.nombre}</h2>
                            <p className="detail-desciption">{product.descripcion}</p>
                            <p className="detail-price">${product.precio}</p>
                        </div>
                        <form onSubmit={ev => {
                            ev.preventDefault();
                            setQuantity(ev.target.quantity.value);
                        }}
                        >
                            <p className="detail-lavel-quantity mb-0 me-2" >Cantidad</p>
                            <input className="form-control shadow-none border-dark" type='number' name='quantity' min='1' />
                        </form>
                        <div className="mt-3">
                            <button type="submit" className="btn btn-dark me-1">BUY</button>
                            <button type="submit" className="btn btn-outline-dark me-1">ADD TO BASKET</button>
                        </div>
                    </div>
                </div>

            }
        </>
    )

}
