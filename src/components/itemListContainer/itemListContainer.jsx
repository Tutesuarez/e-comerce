import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import Spinner from './loadingSpinner';
import ItemList from './itemList';
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore'

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loanding, setLoading] = useState(true);
    const {idCategory} = useParams();

    useEffect(()=>{
        if(idCategory){
            const db = getFirestore()
            const queryCollection= collection(db, 'Products')
            const queryFilter= query(queryCollection, where('category','==', idCategory))

            getDocs(queryFilter)
                .then(respCollection=> setProducts(respCollection.docs.map(prod=>({id:prod.id, ...prod.data()}))))
                .catch(err=>console.error(err))
                .finally(()=>setLoading(false))

        }else{
            const db = getFirestore()
            const queryCollection= collection(db, 'Products')
            getDocs(queryCollection)
                .then(respCollection=> setProducts(respCollection.docs.map(prod=>({id: prod.id, ...prod.data()}))))
                .catch(err=>console.error(err))
                .finally(()=>setLoading(false))
        }
    },[idCategory])

    return (
        <>
            {loanding ? <Spinner /> : <ItemList products={products} />}
        </>
    )
}

export default ItemListContainer






































{/*

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loanding, setLoading] = useState(true);
    const {idCategoria}= useParams();

    useEffect(() => {
        if (idCategoria){
            mFetch()
                .then(resp => setProducts(resp.filter(prod=>prod.categoria===idCategoria)))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))

        }else{
            mFetch()
                .then(resp => setProducts(resp))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }
    }, [idCategoria]);

    return (
        <>
            {loanding ?
                    <Spinner/>
                :
                <div className="container-fluid cards__section vw-100"> 
                    <div className="cards__container__wrap row row-cols-1 row-cols-sm-2 row-cols-lg-4 mt-5 pt-5 m-auto g-3 mb-4">{ 
                            products.map(prod =>
                                <div key={prod.id} className="col">
                                    <div className="card m-auto shadow-sm">
                                        <img className="card-img" src={prod.img} alt={prod.nombre} />
                                        <div className="card-body">
                                            <h3>{prod.nombre}</h3>
                                            <p>${prod.precio}</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div class="btn-group">
                                                    <Link class="btn btn-dark" to={`/detail/${prod.id}`}>Details</Link>
                                                </div>
                                                <a className="btn btn-outline-dark" >Add</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                    </div>
                </div>
            }
        </>
    )
}

export default ItemListContainer

*/}