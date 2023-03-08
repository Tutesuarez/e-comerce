import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const CartContext = createContext([])
export const useCartContext=()=>{
    return useContext(CartContext)
}

export const CartContextProvider=({children})=>{

    const [cartList, setCartList]=useState([])
    
    //logica  Agregar, quitar y vaciar carrito.
    const addToCart=(product)=>{

        setCartList((cartList)=>{
            const isItemFound = cartList.find((prod)=>prod.id===product.id)
            if (isItemFound) {
                return cartList.map((prod)=>{
                    if (prod.id===product.id) {
                        console.log('cantidad:', prod.quantity);
                        return {...prod, quantity: prod.quantity+product.quantity}
                    } else {
                        return prod
                    }
                })
            }else{
                return [...cartList, product]
            }
        })
    }

    const removeItem=(id)=>{
        setCartList((cartList)=>{
            if (cartList.find((prod)=>prod.id===id)?.quantity===1) {
                return cartList.filter((prod)=>prod.id!==id)
            }else{
                return cartList.map((prod)=>{
                    if(prod.id===id){
                        return{...prod, quantity: prod.quantity-1}
                    }else{
                        return prod
                    }
                })
            }
        })
    }

    const emptyCart=()=>{
        setCartList([])
    }

    return(
        <CartContext.Provider value={{
            cartList,
            addToCart,
            emptyCart,
            removeItem
        }}>
            {children}
        </CartContext.Provider>
    )
}