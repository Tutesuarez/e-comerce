import Item from "./item";
import '../itemListContainer/itemListContainer.css';
import { memo } from "react";

const ItemList = memo(({ products }) => {
    return (
        <div className="container-fluid cards__section vw-100">
            <div className="cards_container_wrap row row-cols-1 row-cols-sm-2 row-cols-lg-4 mt-5 pt-5 m-auto g-3 mb-4">{
                products.map(prod =>
                    <Item key={prod.id} prod={prod} />
                )}
            </div>
        </div>
    )
})

export default ItemList