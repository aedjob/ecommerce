// Aca se hace la creacion de cards, con MAPS <li>
import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({id, title, description, price, pictureUrl}) => {
    return(
        <div className='ItemCard'>
            <h2 className='ItemTitle'>{title}</h2>
            <img src={pictureUrl} alt="" className='ItemImg' />
            <div className='ItemInfo'>
                <h4 className='ItemDesc'>Price: ${price}</h4>
                <h4 className='ItemDesc'>{description}</h4>
            </div>
            <Link to={ `/detail/${id}` }>
                <button className='ItemBtn'>View product</button>
            </Link>
        </div>
    )
}

export default Item