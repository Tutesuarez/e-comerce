import { useState } from "react";

export const QuantityCounter =()=>{
    const [quantity, setQuantity] = useState('');
    console.log(quantity);

    return(
        <form onSubmit={ev => {
            ev.preventDefault();
            setQuantity(ev.target.quantity.value);
        }}
        >
            <p className="detail-lavel-quantity mb-0 me-2" >Cantidad</p>
            <input className="form-control shadow-none border-dark" type='number' name='quantity' min='1' />
        </form>
    )
}