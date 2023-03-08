import { Link } from "react-router-dom"


const EmptyCart=()=>{
    return(
        <>
        <td className="text-center" colSpan='6'>
            <h2 className="mt-4">Your cart is empty</h2>
            <Link to='/home'>
                <button className="btn btn-outline-dark my-3">Back to Home</button>
            </Link>
        </td>
        </>
    )
}

export default EmptyCart