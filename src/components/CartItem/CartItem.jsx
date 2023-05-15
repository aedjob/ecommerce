import { Link } from "react-router-dom"
import './CartItem.css'
import { CartContext } from "../../context/CartContext"
import { useContext } from "react"

const CartItem = ({id, title, quantity, price, pictureUrl}) => {
    const {removeItem} = useContext(CartContext)

    return(
        <div className="CartItemCard">
            <img src={pictureUrl} className=''/>
            <h3 className="CartItemTitle"> {title} </h3>
            <h4 className="CartItemQuantity">Quantity: {quantity}</h4>
            <h4 className="CartItemPrice">Unit price: {price}</h4>
            <button onClick={() => removeItem(id)} className='Button'>X</button>
        </div>
    )
}

export default CartItem