import { useState, useCartContext } from "react"
import { addDoc, collection, doc, getFirestore, updateDoc } from "firebase/firestore"


export default function FormCheckOut() {
    const [dataForm, setDataForm] = useState({ name: '', surname: '', phone: '', email: '', emailvalidation: '' })


    // Generar orden
    const OrderGenerator = () => {
        const { cartList } = useCartContext()

        const order = {}
            order.buyer= dataForm,
            order.products= cartList.map(({ id, name, price }) => ({ id, name, price })),
            order.price= totalPrice
            
            //Insertar una order en firestore
                const db=getFirestore()
                const orderCollection= collection(db,'Orders')
        
                addDoc(orderCollection, order)
                .then(resp=>console.log(resp))
                .catch(err=>console.log(err)) 
                .finally(()=>{})
    }

    const handlechange = (e) => {
        e.preventDefault()
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="my-4">
            <form >
                <input className="form-control" type="text" placeholder="Name" name='name' onChange={handlechange} value={dataForm.name} required />
                <input className="form-control" type="text" placeholder="Surname" name='surname' onChange={handlechange} value={dataForm.surname} required />
                <input className="form-control" type="text" placeholder="Phone" name='phone' onChange={handlechange} value={dataForm.phone} required />
                <input className="form-control" type="text" placeholder="Email" name='email' onChange={handlechange} value={dataForm.email} required />
                <input className="form-control" type="text" placeholder="Repeat Email" name='emailvalidation' onChange={handlechange} value={dataForm.emailvalidation} required />
                <button type="submit" onSubmit={OrderGenerator}>BUY</button>
            </form>
        </div>
    )
}

