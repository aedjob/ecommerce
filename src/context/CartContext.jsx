import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
    cart: [],
    totalQuantity: 0
})

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)

    console.log(cart)

    useEffect(() => {
        let quantity = 0;
        cart.forEach(item => {
            quantity += item.quantity;
        });
        setTotalQuantity(quantity);
    }, [cart]);

    const addItem = (item, quantity) => {
        const existingCartItemIndex = cart.findIndex((cartItem) => cartItem.id === item.id)
      
        if (existingCartItemIndex > -1) {
          const cartCopy = [...cart]
          cartCopy[existingCartItemIndex].quantity += quantity
          setCart(cartCopy)
        } else {
          setCart(prev => [...prev, {...item, quantity}])
        }
      };
      

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const calculateTotalPrice = () => {
        return cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
    } 

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, isInCart, calculateTotalPrice, totalQuantity}}>
            {children}
        </CartContext.Provider>
    )
}

