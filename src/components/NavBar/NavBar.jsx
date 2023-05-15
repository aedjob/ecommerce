import './NavBar.css'
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return(
        <nav>
            <Link to ='/'>
                <h3>Ecommerce</h3>
            </Link>
            <div>
                <Link to='/category/caps'>
                    <button>Caps</button>
                </Link>
                <Link to='/category/beanies'>
                    <button>Beanies</button>
                </Link>
                <Link to='/category/shorts'>
                    <button>Shorts</button>
                </Link>
                <Link to='/category/socks'>
                    <button>Socks</button>
                </Link>
            </div>
            <Link to='/cart'>
                <CartWidget />
            </Link>
        </nav>
    )
}

export default NavBar