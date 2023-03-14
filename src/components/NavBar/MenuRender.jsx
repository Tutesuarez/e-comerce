import { Link } from "react-router-dom"


const MenuRender = ({cat}) => {
    return (
        <>
                    <li className="nav-item ">
                        <Link className="nav-link text-white me-3" to={cat.path}>{cat.name}</Link>
                    </li>
        </>
    )
}

export default MenuRender

/*
{
                categories.map(cat =>
                    <li className="nav-item ">
                        <Link className="nav-link text-white me-3" to={cat.path}>{cat.name}</Link>
                    </li>
                    )
            }
*/