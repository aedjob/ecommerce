import './ItemDetail.css'

const ItemDetail = ({id, description, title, price, pictureUrl}) => {
    return(
        <div className='ItemDetail'>
            <h2 className="ItemTitle">{title}</h2>
            <img src={pictureUrl} className='ItemImg'/>
            <div className='ItemInfo'>
                <h4 className='ItemDesc'>Price: ${price}</h4>
                <h4 className='ItemDesc'>{description}</h4>
            </div>
        </div>
    )
}

export default ItemDetail