import { useParams } from "react-router-dom"

export const ItemDetailContainer=()=>{
    
    const objPath = useParams();
    console.log(objPath)
    return(
        <>
        <h3>EStoy en detalle de producto</h3>
        </>
    )
}