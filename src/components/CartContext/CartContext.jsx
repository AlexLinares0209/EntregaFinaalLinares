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

        
        // Si ya esta el producto en el carrito, cambiar la cantidad, si no está, agregar.
        //const isInTheCart = cartList.find((item)=> item.id === product.id);
    }
    


     //Crear una función para cantidad total de productos
    //const getTotalItems = ()=>{
    //    return cartList.reduce((total, currentItem)=>{
    //        return total + currentItem.cantidad;
    //    })
    //}

    // Crear una función para precio total del productos
    const totalPrice = () => cartList.reduce((total,productObject) => total = total + (productObject.price * productObject.cant), 0)
    
    // Eliminar por producto
    //const eliminarDeLaCesta = (product) => {
    //    setCartList([])
    //}
    //const eliminarDeLaCesta = (productId) => {
    //    let newCartList = []
    //}

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
