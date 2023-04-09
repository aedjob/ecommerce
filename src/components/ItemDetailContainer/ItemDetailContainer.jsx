import { useState, useEffect } from "react"
import { getProduct } from "../../utils/productsFetch.js"
import ItemDetail from "../ItemDetail/ItemDetail.jsx"
import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {
    const [product, setItemDetail] = useState([])

    useEffect(() => {
        getProduct('1')
            .then(resp => {setItemDetail(resp)})
            .catch(err => {console.error(err)})
        }, [])

    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer