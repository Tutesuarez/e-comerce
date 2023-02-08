import '../itemListContainer/itemListContainer.css';
import { useState, useEffect } from "react";
import { mFetch } from "../../mFetch";

const ItemListContainer = ({ saludo }) => {
    const [products, setProducts] = useState([]);
    const [loanding, setLoading] = useState(true);

    useEffect(() => {
        mFetch()
            .then(resp => setProducts(resp))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, []);

    return (
        <>
            {loanding ?
                <h2>Loading...</h2> // Cargar un spinner 
                :
                <div className="container-fluid cards__section vw-100"> 
                    <h1>Titulo de seccion</h1>
                    <div className="cards__container__wrap row row-cols-1 row-cols-sm-2 row-cols-lg-4 mt-5 pt-5 m-auto g-3 mb-4">{  // Esto pasarlo a una funcion(componente) aparte.
                            products.map(prod =>
                                <div key={prod.id} className="col">
                                    <div className="card m-auto shadow-sm">
                                        <img className="card-img" src={prod.img} alt={prod.nombre} />
                                        <div className="card-body">
                                            <h3>{prod.nombre}</h3>
                                            <p>${prod.precio}</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div class="btn-group">
                                                    <a class="btn btn-dark" onclick="filterProductDetail(${id})">Details</a>
                                                </div>
                                                <a className="btn btn-outline-dark" onClick="addProductToBasket{prd.id})">Add</a>
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