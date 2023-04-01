// Aca se hace la creacion de cards, con MAPS <li>
// import 'Item.css'

const Item = ({id, title, description, price, pictureUrl}) => {
    return(
        <div className='ItemCard'>
            <h2 className='ItemTitle'>{title}</h2>
            <img src={pictureUrl} alt="" className='ItemImg' />
            <div className='ItemInfo'>
                <h4>Precio: ${price}</h4>
                <h4>{description}</h4>
            </div>
            <button className='ItemBtn'>View product</button>
        </div>
    )
}

export default Item