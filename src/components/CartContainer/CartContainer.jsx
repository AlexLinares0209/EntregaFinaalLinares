import { useContext, useState } from 'react'
import { CartContext } from '../CartContext/CartContext'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import './CartContainer.css'

export const CartContainer = () => {

  const [formData, setformData] = useState(
    {
      name: '',
      phone: '',
      email: ''
    }
  )

  const [isId, setId] = useState('')


  const { cartList, deleteCart, totalPrice } = useContext(CartContext)

  //console.log(cartList)

  const handleOrders = (evt) => {
    evt.preventDefault()
    const order = {}
    order.buyer = formData
    order.items = cartList.map(({ id, price, name, cant }) => ({ id: id, price: price, name: name, cant: cant }))
    order.total = totalPrice()

    const db = getFirestore()
    const queryCollection = collection(db, 'orders')

    addDoc(queryCollection, order)
      .then(({ id }) => setId(id))
      .catch(err => console.log(err))
      .finally(() => {
        setformData({
          name: '',
          phone: '',
          email: ''
        })

        deleteCart()
      
      })


  }

  const handleOnChange = (evt) => {
    setformData(
      {
        ...formData,
        [evt.target.name]: evt.target.value
      }
    )
  }

  return (
    <>
      {isId !== '' && <h2>El ID de la compra es: {isId}</h2>}
      { cartList.length == 0 ? 
        <>
        <h2>No hay productos en el carrito</h2>
       
        </>
      :
        <div className='w-100'>

        {cartList.map(product => <div>
          <img className="w-25" src={product.imageUrl} alt="image" />
          Producto: {product.name} - Price {product.price} - Cantidad: {product.cant}
          <button className='btn btn-danger'> X </button>

          <hr />
        </div>)

        }
        {totalPrice() != 0 && <h4>Precio Total: {totalPrice()}</h4>}
        <br />
        <button className='btn btn-danger' onClick={deleteCart}>Vaciar Carrito</button>
        <br />

        <form className='text-center form-control w-50' onSubmit={handleOrders}>
          <label>Ingrese su nombre</label><br />
          <input className='form-control' type="text" name='name' required onChange={handleOnChange} value={FormData.name} />
          <label>Ingrese su telefono</label><br />
          <input className='form-control' type="text" name="phone" required onChange={handleOnChange} value={FormData.phone} />
          <label>Ingrese su email</label><br />
          <input className='form-control' type="text" name="email" required onChange={handleOnChange} value={FormData.email} />
          <button className='btn btn-success'>Terminar Compra</button>
        </form>


      </div>
      }
    </>
  )
}
