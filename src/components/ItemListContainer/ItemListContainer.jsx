// Aca se hace la promise: return newPromise,  useEffect(), then/catch
// useState(productos),

import { useEffect, useState } from "react"
import { productsFetch } from "../../utils/productsFetch"
import ItemList from "../ItemList/ItemList"
import './ItemListContainer.css'
import { useParams } from "react-router-dom"
import{collection, doc, getDocs, getFirestore, limit, orderBy, query, where} from 'firebase/firestore'

const ItemListContainer = () => {
    const [products, setProducts] = useState([])

    const {cid} = useParams()

    // useEffect(() => {

    //     if(cid) {
    //         productsFetch()
    //         .then(response => setProducts(response.filter(prod => prod.category === cid)))
    //         .catch(error => console.log(error))
    //     } else {
    //         productsFetch()
    //         .then(response => setProducts(response))
    //         .catch(error => console.log(error))
    //     }

    // }, [cid])


    useEffect(()=>{

        if(cid) {
            const db = getFirestore()
            const queryCollection = collection(db, 'products')
    
            const queryFilter = query(
                    queryCollection, 
                    where('category', '==', cid)
                    // where('price', '>=', '60'), 
                    // limit(1),
                    // orderBy('price','desc')
                )
    
            getDocs(queryFilter)
            .then(resp => setProducts(resp.docs.map(product => ({id: product.id, ...product.data()}))))
            .catch(err => console.log(err))
        } else {
            const db = getFirestore()
            const queryCollection = collection(db, 'products')

            getDocs(queryCollection)
            .then(resp => setProducts(resp.docs.map(product => ({id: product.id, ...product.data()}))))
            .catch(err => console.log(err))            
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