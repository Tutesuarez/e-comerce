import { useState } from "react";



export const ItemCount = ({ initial = 1, stock = 10, onAdd=onAdd}) => {
    const [count, setCount] = useState(initial);

    const handleInter=()=>{
        onAdd(count)
    }

    const sumar=()=>{
        if (count<stock) {
            setCount(count + 1);
        }
    }

    const restar=()=>{
        if (count>initial) {
            setCount(count-1);
        }
    }

    return (
        <div>
            <p className="detail-lavel-quantity mb-0" >Quantity</p>
            <div className="card mt-1">
                <div className="card-body row">
                    <div className="col">
                        <button className="btn btn-outline-dark w-100" onClick={restar}> - </button>
                    </div>
                    <div className="col d-flex align-items-center">
                            <p className="text-center m-0 w-100">{count}</p>
                    </div>
                    <div className="col">
                        <button className="btn btn-outline-dark w-100" onClick={sumar}> + </button>
                    </div>
                </div>
                <button className="btn btn-outline-dark mx-3 mb-2" onClick={handleInter}>ADD TO BASKET</button>
            </div>
        </div>
    )
}

