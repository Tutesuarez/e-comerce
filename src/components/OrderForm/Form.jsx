import { useState} from "react"
import {useCartContext } from  "../../context/cartContext"
import { addDoc, collection, doc, getFirestore, updateDoc } from "firebase/firestore"


const FormCheckOut=(totalPrice)=> {
    const [dataForm, setDataForm] = useState({ name: '', surname: '', phone: '', email: '', emailvalidation: '' })
    const {cartList, emptyCart}= useCartContext()


    // Generar orden
    const OrderGenerator = (e) => {
        e.preventDefault()
        const order = {}
            order.buyer= dataForm,
            order.products= cartList.map(({ id, name, price }) => ({ id, name, price })),
            order.price= totalPrice


       //Insertar una order en firestore
        const db = getFirestore()
        const queryCollection = collection(db, 'Orders')

        addDoc(queryCollection, order)
            .then(resp => console.log(resp))
            .catch(err => console.log(err))
            .finally(() => {
                emptyCart()
                setDataForm({name: '', surname: '', phone: '', email: '', emailvalidation: ''})
             })
    }

    const handlechange = (e) => {
        e.preventDefault()
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="row my-4">
            <div className="col-12 col-lg-6">
                <form className="border p-2" onSubmit={OrderGenerator}>
                    <input className="form-control mb-3" type="text" placeholder="Name" name='name' onChange={handlechange} value={dataForm.name} required />
                    <input className="form-control mb-3" type="text" placeholder="Surname" name='surname' onChange={handlechange} value={dataForm.surname} required />
                    <input className="form-control mb-3" type="text" placeholder="Phone" name='phone' onChange={handlechange} value={dataForm.phone} required />
                    <input className="form-control mb-3" type="text" placeholder="Email" name='email' onChange={handlechange} value={dataForm.email} required />
                    <input className="form-control mb-3" type="text" placeholder="Repeat Email" name='emailvalidation' onChange={handlechange} value={dataForm.emailvalidation} required />
                    <button className="btn btn-dark mt-3 px-4 fw-bold" type="submit">BUY</button>
                </form>
            </div>
        </div>
    )
}

export default FormCheckOut