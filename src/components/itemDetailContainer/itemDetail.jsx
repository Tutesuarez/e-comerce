import "../itemDetailContainer/itemDetail.css";
import { QuantityCounter } from "../quantityContainer/quantityContainer";

const ItemDetail = ({product}) => {

    return (
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
                        <QuantityCounter/>
                        <div className="mt-3">
                            <button type="submit" className="btn btn-dark me-1">BUY</button>
                            <button type="submit" className="btn btn-outline-dark me-1">ADD TO BASKET</button>
                        </div>
                    </div>
                </div>
    )
}

export default ItemDetail