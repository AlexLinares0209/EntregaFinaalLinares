import { Link } from "react-router-dom"

import './ItemList.css'


export const ItemList = ({ products }) => {
    return (
        products.map(product => <div className="producto">
                                    <div className="tarjeta">
                                        <img src={product.imageUrl} className="imagen-producto" />
                                    </div>
                                    <div className="info">
                                        <p className="titulo-producto">Nombre: {product.name}</p>
                                        <p className="descripcion-producto">Categoría: {product.category}</p>

                                    <div className="info-flex">
                                        <p className="precio-del-producto">Precio: {product.price}</p>
                                        <Link to={`/detail/${product.id}`}>
                                            <button className="boton-añadir-carrito">ver detalle</button>
                                        </Link>
                                    </div>

                                    </div>
                                    
                                </div>
        )
    )
}
