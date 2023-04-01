import cart from './assets/cart.svg'

const CartWidget = () => {
    return(
        <button>
            <div>
                <img src={cart} alt="cart-widget" />
                0
            </div>
        </button>
    )
}

export default CartWidget