import CartWidget from "../CartWidget/Cartwidget"

const NavBar = () => {
    return(
        <nav>
            <h3>Natural Made</h3>
            <div>
                <button>Cuencos</button>
                <button>Tablas</button>
                <button>Platos</button>
            </div>
            <CartWidget />
        </nav>
    )
} 

export default NavBar