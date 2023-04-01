// Aca se hace la promise: return newPromise,  useEffect(), then/catch
// useState(productos),

import { useEffect, useState } from "react"
import { productsFetch } from "../../utils/productsFetch"
import ItemList from "../ItemList/ItemList"
import './ItemListContainer.css'

const ItemListContainer = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        productsFetch()
            .then(response => setProducts(response))
            .catch(error => console.log(error))
    }, [])

    console.log(products)

    return(
        <div className="ItemListContainer">
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer