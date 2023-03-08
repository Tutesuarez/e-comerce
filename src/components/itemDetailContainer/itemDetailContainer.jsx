import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Spinner from "../itemListContainer/loadingSpinner";
import ItemDetail from "./itemDetail";
import { doc, getDoc, getFirestore} from 'firebase/firestore'

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const [loanding, setLoading] = useState(true);
    const {idProduct} = useParams();

    useEffect(() => {
        const db = getFirestore()
        const queryDoc = doc(db, 'Products', idProduct)
        getDoc(queryDoc)
            .then(respProd => setProduct({ id: respProd.id, ...respProd.data() }))
            .catch(err => console.error(err))
            .finally(() => setLoading(false))
    }, [idProduct])

    return (
        <>
            {loanding ? <Spinner /> : <ItemDetail product={product} />}

        </>
    )
}

