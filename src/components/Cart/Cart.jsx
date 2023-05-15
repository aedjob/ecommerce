import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'

const Cart = () => {
    const {cart, clearCart, totalQuantity, calculateTotalPrice} = useContext(CartContext)

    if(totalQuantity === 0) {
        return (
            <div>
                <h1>Empty cart</h1>
                <Link to='/' className='Option'>Products</Link>
            </div>
        )
    }

    return(
        <div>
            {cart.map(p => <CartItem key={p.id} {...p}/>)}
            <h3>Total: ${calculateTotalPrice()}</h3>
            <button onClick={() => clearCart()} className='Button'>Clear cart</button>
            <Link to='/checkout' className='Option'>Checkout</Link>
        </div>
    )
}

export default Cart