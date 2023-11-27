import { createContext, useState } from "react";

export const CartContext = createContext([])

export const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

    const agregarAlCarrito = (product) => {
        setCartList(
            [
                ...cartList,
                product
            ]
        )
    }
    


    // precio total del productos
    const totalPrice = () => cartList.reduce((total,productObject) => total = total + (productObject.price * productObject.cant), 0)
    
    

    const deleteCart = () => {
        setCartList([])
    }
 
    

    return (
        <CartContext.Provider value={{
            cartList,
            agregarAlCarrito,
            deleteCart,
            totalPrice
            
        }}>
            {children}
        </CartContext.Provider>
    )
}
