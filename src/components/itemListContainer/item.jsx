import { Link } from "react-router-dom"
import '../itemListContainer/itemListContainer.css';


const Item = ({ prod}) => {

    return (
        <div className="col">
            <div className="card m-auto shadow-sm">
                <img className="card-img" src={prod.img} alt={prod.name} />
                <div className="card-body">
                    <h3>{prod.name}</h3>
                    <p>${prod.price}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <Link className="btn btn-dark" to={`/detail/${prod.id}`}>Details</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item
