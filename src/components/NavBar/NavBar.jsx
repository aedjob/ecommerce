import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return(
        <nav>
            <h3>Ecommerce</h3>
            <div>
                <button>Caps</button>
                <button>Beanies</button>
                <button>Shorts</button>
                <button>Socks</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar