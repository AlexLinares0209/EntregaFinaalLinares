import { useState, useEffect } from 'react'
import { mFetch } from '../../mFetch'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

import './ItemListContainer.css'

const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { cid } = useParams()

    useEffect(() => {
        if (cid) {

            mFetch()
                .then(resultado => setProducts(resultado.filter(product => product.category === cid)))
                .catch(error => console.log(error))
                .finally(() => setLoading(false))
        }
        else {
            mFetch()
                .then(resultado => setProducts(resultado))
                .catch(error => console.log(error))
                .finally(() => setLoading(false))
        }
    }, [cid])

    return (
        <>

            {loading ?  <div className='container-spinner'>
                            <div class="spinner-border text-dark" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                        </div>
                :
                <div className='container-cards'>
                    <ItemList products={products} />
                </div>
            }

        </>
    )
}

export default ItemListContainer