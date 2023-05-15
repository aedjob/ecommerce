import './ItemDetail.css'
import { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'


const ItemDetail = ({id, description, title, price, stock, pictureUrl}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const {addItem} = useContext(CartContext)

    //handleOnAdd adds item to cart using addItem function from CartContext 
    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, title, price
        }

        addItem(item, quantity)
    }

    return(
        <div className='ItemDetail'>
            <img src={pictureUrl} className='DetailImg'/>
            <div className='DetailInfo'>
                <h2 className="DetailTitle">{title}</h2>
                <h4 className='DetailDesc'>Price: ${price}</h4>
                <h4 className='DetailDesc'>{description}</h4>
            </div>
            <div className='ItemCount'>
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart' className="Button"> Complete Purchase </Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                    )
                }
            </div>

        </div>
    )
}

export default ItemDetail