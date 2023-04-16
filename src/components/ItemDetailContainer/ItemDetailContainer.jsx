import { useState, useEffect } from "react"
import { getProduct } from "../../utils/productsFetch.js"
import ItemDetail from "../ItemDetail/ItemDetail.jsx"
import { useParams } from "react-router-dom"
import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {
    const [product, setItemDetail] = useState([])
    const {pid} = useParams()

    useEffect(() => {
        getProduct(pid)
            .then(resp => {setItemDetail(resp)})
            .catch(err => {console.error(err)})
        }, [pid])

    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer