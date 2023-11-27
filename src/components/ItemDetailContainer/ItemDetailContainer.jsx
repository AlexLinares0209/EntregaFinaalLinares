import { doc, getDoc, getFirestore } from "firebase/firestore"

import { useContext, useEffect, useState } from "react"

import { useParams } from "react-router-dom"

import { CartContext } from "../CartContext/CartContext"
import { ItemCounter } from "../ItemCounter/itemCounter"

import './ItemDetailContainer.css'

export const ItemDetailContainer = () => {

    const [ product, setProduct ] = useState({})
    const [ loading, setLoading ] = useState(true)
    const { pid } = useParams()

    const { agregarAlCarrito } = useContext(CartContext)

    useEffect(() => {
        const dbFirestore = getFirestore()
        const queryDoc = doc(dbFirestore, 'products', pid)
        getDoc(queryDoc)
        .then(res => setProduct({ id: res.id, ...res.data() }))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])

    const onAdd = cant => {
        agregarAlCarrito( { ...product, cant } )
    }   




    return (

        <>

            {
                loading ? <div className='container-spinner'>
                    <div class="spinner-border text-dark" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
                    :
                    <div className="container mt-5">

                        <div className="container-detail">

                            <div className="container-img">
                                <img src={product.imageUrl} alt="" className="img-fluid" />
                            </div>

                            <div className="info-detail-product">
                                <p><span>nombre:</span> {product.name}</p>
                                <p><span>categoría:</span> {product.category}</p>
                                <p><span>descripción:</span> {product.description}</p>
                                <p><span>precio:</span> {product.price}</p>
                                <ItemCounter initial={1} stock={5} onAdd={onAdd} />
                            </div>

                        </div>

                    </div>
            }

        </>


    )
}
