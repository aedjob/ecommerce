import { useState } from "react"

const ItemCount = ({initial, stock, onAdd}) => {
    // set initial state for product quantities:
    const [quantity, setQuantity] = useState(initial)

    const increase = () => {
        if(quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrease = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return(
        <div className="Counter">
            <div className="Controls">
                <button className="Button" onClick={decrease}>-</button>
                <h4 className="Number">{quantity}</h4>
                <button className="Button" onClick={increase}>+</button>
            </div>
            <div>
                {/* disabled = {!stock} me desactiva la opcion onAdd sobre el boton en caso de que stock = Null */}
                <button className="Button" onClick={() => onAdd(quantity)} disabled={!stock}>Add to cart</button>
            </div>
        </div>
    )
}

export default ItemCount