import "../itemDetailContainer/itemDetail.css";
import { useEffect, useState } from "react"
import { mFetch } from "../../mFetch";
import { useParams } from "react-router-dom"
import Spinner from "../itemListContainer/loadingSpinner";

export const ItemDetail = () => {
    const [product, setProduct] = useState([]);
    const [loanding, setLoading] = useState(true);
    const { idProducto } = useParams();
    const [quantity, setQuantity]= useState('');
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
                <Spinner/>
                :
                    <div className="container-fluid row vw-100">
                        <div className="col d-flex justify-content-lg-end me-lg-1 justify-content-center">
                            <img className="detail-img" src={product.img} alt="" />
                        </div>
                        <div className="col justify-content-lg-start me-lg-1 justify-content-center mt-2 mt-lg-0">
                            <div>
                                <h2>{product.nombre}</h2>
                                <p>{product.descripcion}</p>
                                <p>${product.precio}</p>
                            </div>
                            <form onSubmit={ ev=>{
                                ev.preventDefault();
                                setQuantity(ev.target.quantity.value);
                                }}
                            >
                                <p className="mb-0" >Cantidad</p>
                                <input type='number' name='quantity' min='1'/>
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
