import { useState, useEffect } from 'react'
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { mFetch } from '../../mFetch'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

import './ItemListContainer.css'

const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    const { cid } = useParams()

    
    
    useEffect(() => {
        if (cid) {

            const dbFirestore = getFirestore()
            const queryCollection = collection(dbFirestore, 'products')

            const queryFilter = query(queryCollection, where('category', '==', cid))

            getDocs(queryFilter)
            .then(res => setProducts( res.docs.map(product => ({ id: product.id, ...product.data()}) ) ))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
            
        }
        else {
            const dbFirestore = getFirestore()
            const queryCollection = collection(dbFirestore, 'products')

            getDocs(queryCollection)
            .then(res => setProducts( res.docs.map(product => ({ id: product.id, ...product.data()}) ) ))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))

        }
    }, [cid])
    

    return (
        <>

            {loading ? <div className='container-spinner'>
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