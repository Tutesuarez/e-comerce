import { addDoc, collection, doc, getFirestore, updateDoc } from "firebase/firestore"
import { useState } from "react"
import { useCartContext } from "../../context/cartContext"
import "../OrderForm/Form.css"


const FormCheckOut = ({ totalPrice, ChangeOrder }) => {
    const [dataForm, setDataForm] = useState({ name: '', surname: '', phone: '', email: '', emailvalidation: '' })
    const { cartList, emptyCart } = useCartContext()
    let idOrder = 0

    // Generar orden
    const OrderGenerator = (e) => {
        e.preventDefault()
        
        const order = {}
        order.buyer = dataForm,
            order.products = cartList.map(({ id, name, price, quantity }) => ({ id, name, price, quantity })),
            order.price = totalPrice

        //Insertar una order en firestore
        const db = getFirestore()
        const queryCollection = collection(db, 'Orders')

        addDoc(queryCollection, order)
            .then(({ id }) => { idOrder = id })
            .catch(err => console.log(err))
            .finally(() => {
                emptyCart()
                setDataForm({ name: '', surname: '', phone: '', email: '', emailvalidation: '' })
                handelInter()
            })
    }

    const handlechange = (e) => {
        e.preventDefault()
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
        EmailValidation()
    }

    const handelInter = () => {
        ChangeOrder(idOrder)
    }

    const EmailValidation = () => {
        if (dataForm.email === dataForm.emailvalidation && dataForm.email !== '' && dataForm.email.includes('@')) {
            return false
        } else {
            return ('The email does not match')
        }
    }
    const errorMessage = EmailValidation(dataForm)


    return (
        <div className="container cart__list__wrap">
            <div className="row my-4 mx-0 px-0 container">
                <h3 className="bg-dark text-bg-dark mt-4 mx-0 py-2 form__title">Complete your infomation to make an order</h3>
                <div className="col-12">
                    <form className="border p-2" onSubmit={OrderGenerator}>
                        <div className="row">
                            <div className="col-12 col-lg-4">
                                <input className="form-control mb-3" type="text" placeholder="Name" name='name' onChange={handlechange} value={dataForm.name} required />
                            </div>
                            <div className="col-12 col-lg-4">
                                <input className="form-control mb-3" type="text" placeholder="Surname" name='surname' onChange={handlechange} value={dataForm.surname} required />
                            </div>
                            <div className="col-12 col-lg-4">
                                <input className="form-control mb-3" type="text" placeholder="Phone" name='phone' onChange={handlechange} value={dataForm.phone} required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <input className=" col-6 form-control mb-3" type="text" placeholder="Email" name='email' onChange={handlechange} value={dataForm.email} required />
                            </div>
                            <div className="col-12 col-lg-6">
                                <input className=" col-6 form-control mb-3" type="text" placeholder="Repeat Email" name='emailvalidation' onChange={handlechange} value={dataForm.emailvalidation} required />
                            </div>
                        </div>
                        <p>{errorMessage}</p>
                        <button className="btn btn-dark mt-3 px-4 fw-bold" type="submit" disabled={errorMessage}>Make an Order</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormCheckOut

