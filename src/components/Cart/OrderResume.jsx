import { doc, getDoc, getFirestore} from 'firebase/firestore'
import { useEffect, useState } from "react"


const OrderResume=({idOrder})=>{
    const [orderResume,setOrderResume]=useState([])

    useEffect(() => {
        const db = getFirestore()
        const queryDoc = doc(db, 'Orders', idOrder)

        getDoc(queryDoc)
            .then(respOrder => setOrderResume({ id: respOrder.id, ...respOrder.data() }))
            .catch(err => console.error(err))
           // .finally(() => setLoading(false))
    }, [idOrder])

    console.log(orderResume);
    return(
        <>
        <h1>Codigo de orden: {idOrder}</h1>
        </>
    )
}

export default OrderResume