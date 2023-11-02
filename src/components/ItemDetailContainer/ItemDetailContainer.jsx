import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { mFetch } from "../../mFetch"

import './ItemDetailContainer.css'

export const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const { pid } = useParams()



    useEffect(() => {
        mFetch(pid)
            .then(resultado => setProduct(resultado))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }, [])



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
                            </div>

                        </div>

                    </div>
            }

        </>


    )
}
