import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Timestamp, addDoc, collection, documentId, getDocs, where, writeBatch, query } from "firebase/firestore"
import CheckoutForm from "../CheckoutForm/CheckoutForm.jsx"
import { db } from "../../firebase/config"

const Checkout = () => {
    const [orderId, setOrderId] = useState('')

    const {cart, calculateTotalPrice, clearCart} = useContext(CartContext)

    const createOrder = async ({name, phone, email}) => {

        try {
            const objOrder = {
                buyer: {
                    name,
                    phone,
                    email
                },
                items: cart,
                total: calculateTotalPrice(),
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map(prod => prod.id)

            const productsRef = collection(db, 'products')

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

            const {docs} = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, {stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({id: doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                setOrderId(orderAdded.id)
                clearCart()
            } else {
                console.error('Products out of stock')
            }
        } catch (error) {
            console.log(error)
        } 
    }

    if(orderId) {
        return <h3>Your order id is: {orderId}</h3>
    }

    return (
        <div>
            <h3>Checkout</h3>
            <CheckoutForm onConfirm={createOrder}/>
        </div>
    )
}

export default Checkout
