import { useEffect, useState } from "react"
import { mFetch } from "../../mFetch";
import { useParams } from "react-router-dom"
import Spinner from "../itemListContainer/loadingSpinner";
import ItemDetail from "./itemDetail";


export const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const [loanding, setLoading] = useState(true);
    const { idProducto } = useParams();

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

    return (
        <>
            {loanding ? <Spinner /> :  <ItemDetail product={product}/> }
        </>
    )
}

