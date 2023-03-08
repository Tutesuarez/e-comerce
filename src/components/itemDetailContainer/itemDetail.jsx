import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
import "../itemDetailContainer/itemDetail.css";
import { ItemCount} from "../quantityContainer/quantityContainer";

const DetailButtons= ()=> {

    return (
        <>
        <div className="card border-0">
        <div className="row mb-2 text-center">
            <Link className="col px-0" to='/cart' >
                <button className="btn btn-outline-dark" >Go to Cart</button>
            </Link>
            <Link className="col px-0" to='/' >
                <button className="btn btn-outline-dark">Keep Shopping</button>
            </Link>
        </div>
        </div>
        </>
    )
}


const ItemDetail = ({product}) => {
    const{addToCart}=useCartContext()
    const[isCount,setIsCount]=useState(true)


function onAdd(quantity) {
        addToCart({...product, quantity})
        setIsCount(false)
    }
    return (
        <div className="detail__container__wrap container-fluid row vw-100 p-0">
                    <div className="detail__container-img col-12 col-lg-6 d-flex justify-content-lg-end pe-md-3 justify-content-center">
                        <img className="detail-img" src={product.img} alt="" />
                    </div>
                    <div className="detail__container__description col-12 col-lg-6 mt-2 mt-lg-0 ">
                        <div className="mt-3 mt-md-0">
                            <h2 className="detail-name-product">{product.name}</h2>
                            <p className="detail-desciption">{product.description}</p>
                            <p className="detail-price">${product.price}</p>
                        </div>
                        {isCount?
                                <ItemCount initial={1} stock={10}  onAdd={onAdd}/>
                            :
                                <DetailButtons/>
                        }
                    </div>
                </div>
    )
}

export default ItemDetail