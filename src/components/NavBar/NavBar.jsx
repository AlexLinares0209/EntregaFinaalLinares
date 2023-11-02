import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

import './NavBar.css'

const navBar = () => {
    return (
        <>
            <nav>
                <Link to='/'>ShopCart</Link>
                <ul>
                    <Link to='/category/casacas'>casacas</Link>
                    <Link to='/category/polos'>polos</Link>
                    <Link to='/category/pantalones'>pantalones</Link>
                    <Link to='/cart'>
                        <CartWidget />
                    </Link>
                </ul>
            </nav>
        </>
    )
}

export default navBar