import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const navBar = () => {
    return (
        <>
            <nav>
                <a href="#">ShopCart</a>
                <ul>
                    <li>casacas</li>
                    <li>polos</li>
                    <li>pantalones</li>
                    <li> <CartWidget /> </li>
                </ul>
            </nav>
        </>
    )
}

export default navBar