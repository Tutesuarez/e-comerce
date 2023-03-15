
import { Link } from "react-router-dom"
import { collection, getDocs, getFirestore } from "firebase/firestore"
import { useState,useEffect } from "react"
import CartWidget from "./CartWidget"
import MenuRender from "./MenuRender"
import "../NavBar/NavBar.css"


/*Get del menu desde firestore + renderizacion de navbar mediante componenetes CartWidget y MenuRender */ 
const Navbar = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const db = getFirestore()
        const queryCat = collection(db, 'Categories')

        getDocs(queryCat)
            .then(respCollection => setCategories(respCollection.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
            .catch(err => console.error(err))
    })
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container-fluid ">
                    <Link to='/home'>
                        <img src="./assets/img/LOGO.svg" alt="Logo Fashion" />
                    </Link>
                    <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse text-uppercase" id="navbarSupportedContent">
                        <ul className="navbar-nav nav-tabs mb-2 mb-lg-0 ms-auto">
                            {
                                categories.map(cat =>
                                    <MenuRender key={cat.id} cat={cat}/>
                                )
                            }
                        </ul>
                        <CartWidget />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar