// Aca se hace la promise: return newPromise,  useEffect(), then/catch
// useState(productos),

import { useEffect, useState } from "react"
import { productsFetch } from "../../utils/productsFetch"
import ItemList from "../ItemList/ItemList"
import './ItemListContainer.css'
import { useParams } from "react-router-dom"

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const {cid} = useParams()

    useEffect(() => {

        if(cid) {
            productsFetch()
            .then(response => setProducts(response.filter(prod => prod.category === cid)))
            .catch(error => console.log(error))
        } else {
            productsFetch()
            .then(response => setProducts(response))
            .catch(error => console.log(error))
        }

    }, [cid])

    console.log(products)

    return(
        <div className="ItemListContainer">
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer